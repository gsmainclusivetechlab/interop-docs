---
title: Secure Connections
sidebar_label: Secure Connections
---

The Interoperability Test Platform provides several ways to ensure that your
test components are behaving in a secure way.

## Encrypted Connections with mTLS

Normally, two components of a system may communicate via mutual TLS (mTLS),
where both the client and the server authenticate themselves using public key
cryptography. Since the test platform is a proxy in between these two
components, we must now consider two connections instead of one:

1. The connection between a client and the proxy (acting on behalf of a server)
2. The connection between the proxy (acting as a client) and the server

In many cases where mTLS is used, these two connections may additionally operate
in the reverse direction (i.e. the client may also act as a server, and vice
versa).

Note that in the code samples below, `openssl` is used. Similar operations can
be performed with any appropriate tool.

### 2. Proxy → Server

In this leg, ITP is acting as an application client, and your SUT is the
application server. Although this is the second leg of the connection, it needs
to be configured first, as part of the session creation wizard:

![Encrypted Server Configuration](/img/encrypted-server.png)

It is assumed that the application server is already configured with a server
key and server certificate, signed by a private certificate authority (CA). In
the code samples below, `ca.crt` refers the the public certificate of the
private CA, and `ca.key` refers to its private key.

Firstly, the CA certificate (`ca.crt`) can be uploaded directly. This will be
used by ITP to verify that your server is authenticating itself correctly with a
valid server certificate.

To authenticate itself to your server, ITP also needs to present a client
certificate signed by your private CA. In order to do this, a certificate
signing request (CSR) can be generated as part of the session creation wizard.
You can download this CSR (`client.csr`), and generate a client certificate
(`client.crt`) using the CA credentials:

```bash
openssl x509 -req -days 365 \
    -in client.csr -out client.crt \
	-CA ca.crt -CAkey ca.key -CAcreateserial
```

You can now upload the client certificate to the platform and proceed to the
next step of session creation.

Instead of uploading these certificates every time a new session is created, it
is also possible to upload the certificates to a [user group](./groups). By
doing this, a dropdown will appear allowing you to select preconfigured
certificates directly.

#### Debugging

It is possible to bypass this leg of the encrypted connection by disabling the
"use encryption" setting for the component. When you do this, the URLs which are
displayed will change to use the
["insecure"](../architecture/connections#insecure-urls) version of the URL.
However ITP will continue to present a secure mTLS server, so it will be
possible for the Client → Proxy leg to continue to use the original secure url.
A test failure will be logged on the test results, to indicate that an insecure
connection was used when a secure one was expected.

### 1. Client → Proxy

In this direction, ITP is acting as an application server. ITP will present a
server certificate (signed by its own private certificate authority), and will
require that the client presents a client certificate signed by the same private
certificate authority (CA). To establish an encrypted connection, therefore, you
must obtain a signed client certificate when you create a session.

To do this, the client must first have a private key. If you do not already have
a private key, one can be generated with:

```bash
openssl genrsa -out client.key 2048
```

Once you have a private key, you will need to generate a CSR (`client.csr`).
This contains the information required for ITP to generate a signed certificate:

```bash
openssl req -new -key client.key -out client.csr
```

Within the test session, you can click the "Download Certificates" button to
obtain this signed certificate. After uploading `client.csr` in the window that
appears, you will be able to download a zip file containing two certificates.

![Test Session URL Configuration](/img/encrypted-client.png)

One certificate will be called `client.crt`, which is the certificate your
client should present when sending a request. The other certificate is called
`RootCA.crt`, and your client should use this certificate as a CA certificate to
validate the authenticity of ITP's server certificate.

These two certificates will remain constant across all sessions (as long as your
client key does not change), so you should not need to reconfigure these
certificates at any stage.

#### Debugging

It is possible to bypass the encrypted connection for this step by using the
"insecure" version of the [URL](../architecture/connections#insecure-urls). When
you use the insecure version of the URL, no mTLS checking is performed and a
direct HTTP connection can be used. ITP will continue to use an mTLS connection
when for the Proxy → Server leg, so the server will not need to be reconfigured.
A test failure will be logged on the test results, to indicate that an insecure
connection was used when a secure one was expected.

## JSON Web Signatures (JWS)
