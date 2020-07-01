---
title: Testing without a SUT
sidebar_label: Testing without a SUT
---

If you do not yet have a system to test, but still wish to try the
Interoperability Test Platform, you can do so by simulating the action of a real
SUT manually using an HTTP client tool such as
[Postman](https://www.postman.com), [Insomnia](https://insomnia.rest),
[Postwoman](https://postwoman.io), [HTTPie](https://httpie.org),
[SoapUI](https://www.soapui.org), [Paw](https://paw.cloud), etc. To simplify
this, we have provided Postman Collections which will allow you to simulate the
operation of a Service Provider under each of the currently supported test cases
for the Merchant Payments use-case.

### Postman Collections

The requests that can be made for each test case are grouped into collections to
simplify the testing process. The collection for the Service Provider is freely
accessible
[here](https://explore.postman.com/api/5380/interoperability-test-platform---service-provider-simulator).
It is worth remembering that the collections can be easily adapted to another
HTTP client of your choice.

Collections available in Postman:
![Postman Collections](/img/postmancollections.png)

## Creating a Session

To create a session for our Postman SUT, you can select "Service Provider" as
the SUT type. In the currently supported test-cases, the Service Provider URL is
never actually used, so it is safe to enter any valid URL as the SUT URL. On the
second page, select all "Merchant-Initiated Merchant Payment" test cases.

Finally, like any other SUT, the Postman SUT needs to be configured with the
component URLs presented within the test platform. In particular, we will need
to set up the URL for Mobile Money Operator 1, which is provided to you in
step 3. Copy the URL, and then open up the Postman environment variable window.
Select the "Current Value" field for the environment variable `full_url` and
paste in the URL just copied.

## Sending Requests from Postman

Now that the test platform session is created, and your SUT is configured, you
are ready to run the first test. Looking through the test flow for any of the
test cases selected in the previous step, you can see that every interaction
begins with a message sent by the service provider. To start the test execution,
then, we simply need to return to Postman, select one of the test cases in the
imported collection, and click "Send". When you do, the response from MMO1
should look like this:

```json
{
  "status": "pending",
  "notificationMethod": "callback",
  "serverCorrelationId": "93d7eac2-3556-4e49-b672-ad7f65ad2be1"
}
```

That means that MMO1 has accepted the API call, and you can now return to the
ITP dashboard to view the test results. Select the test case corresponding to
the request you just sent, and examine the test results just as you would for a
normal SUT.

## Troubleshooting

After sending your request from Postman, you may receive the following response
in place of what is described above:

```json
{
  "message": "No query results for model [App\\Models\\TestStep]."
}
```

This error is caused when the test platform is unable to
[match](/architecture/matching) the incoming request with any active test cases.
This is most commonly a sign that some of the request triggers have been
incorrectly configured. Double-check that the request payload contains the same
data as that which is described in the "Precondition" section of the test case
you are trying to run.

## Running Multiple Tests

If you would like to run multiple tests simultaneously, this is possible with
Postman through the Collection Runner. Using this, it is possible to define
parameters for the execution of the test cases collection, such as: number of
iterations, delay between requests, and so forth.

Running a Collection of Test Cases:
![Run Test Case Collection](/img/runcollection.png)
