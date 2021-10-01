---
title: Test Case Template
sidebar_label: Test Case Template
---

The ITP test cases are defined using YAML files. Each file is composed of
several fields which define both the validations to perform during a test as
well as the behaviour of any simulated components. This page describes the basic
structure of a YAML file for the test platform.

## Test Case Information

Every test case YAML file begins with the same basic information. Six fields are
used as a header to specify particular characteristics related to the test case
and the use case it belongs to. Below you can see a table with the fields used
in the header and an example of the test case data in a YAML file.

| Name           | Description                                                                                                                                                                   | Example                                                                                                   |
| :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `name`         | The name of the Test Case that will be shown to users.                                                                                                                        | `Authorized Transaction by Payer FSP`                                                                     |
| `slug`         | A unique name for the test case, used internally.                                                                                                                             | `authorized-transaction`                                                                                  |
| `use_case`     | The name of the Use Case that the test case case is related to. This should be identical for all Test Cases sharing a Use Case.                                               |
| `behavior`     | Defines the type of the Test Case, i.e. "Happy flow" (`positive`) and "Unhappy flow" (`negative`).                                                                            | <ul><li>`positive`</li><li>`negative`</li></ul>                                                           |
| `description`  | A description of the Test Case. It is useful to include some business background of what we are trying to achieve in this case.                                               | The Service Provider wants to test if he is capable of receiving a transaction from a different wallet... |
| `precondition` | An additional area describing specific values that should be used to execute a Test Case. This may include directions for using test case [triggers](/architecture/matching). |

#### Example of test case information in a YAML file

```yaml
name: Authorized Transaction by Payer FSP
slug: authorized-transaction
use_case: Merchant-Initiated Merchant Payment
behavior: positive
description: |
  The Service Provider wants to test if he is capable of receiving a
  transaction from a different wallet provider than the one with which he has
  an account. In this case, we simulate the scenario when the Payer would
  like to buy goods or services from a Service Provider (the Payee), but each
  of them uses different wallet providers. This flow shows the necessary
  steps for this transaction simulating an approved transaction.
precondition: |
  - Service Provider has GSMA Mobile Money API Implemented.
  - Service Provider is capable of handling async calls.
  - Payee and Payer MMOs exist in Mojaloop as Participants.
  - Payee and Payer exist in Mojaloop as Parties.
  - Amount should be the value "1001".
  - Debit party should be identified by account identifier "msisdn" with the value "+33555123456".
  - Credit party should be identified by account identifier "msisdn" with the value "+33555789123".
```

### Test Case Components

The `components` field defines the components which are used in the test case.
Each component is defined by:

| Name                  | Description                                                                                                                           | Example            |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `name`                | The readable name of the component that will be shown to users.                                                                       | `Service Provider` |
| `slug`                | A short unique name for the component, which will be used elsewhere in the file and in [component URLs](../architecture/connections). | `sp`               |
| `versions` (optional) | The versions of a component for which this test case should be used.                                                                  | `[v1, v2]`         |

Although the name, slug and versions field are free to be any values, it is
generally a good idea to keep the values consistent across multiple test cases.
This ensures that identical components are correctly grouped in component
diagrams, for example.

Component versions can be useful in the situation that the test platform wants
to test multiple versions of a component at once. For example, one may wish to
test a behaviour which exists in `v1` of a system, but is deprecated in `v2` and
`v3`. In this case, two test cases should be created - with the version field
set appropriately in both. If the behaviour examined by a test case does not
differ based on component versions, then the version field may be omitted, and
the test case will be used for any component version.

```yaml
# ... test case information
components:
  - name: Service Provider
    slug: service-provider
    versions:
      - v2
      - v3
  - name: Mojaloop
    slug: mojaloop
  - name: Mobile Money Operator 1
    slug: mmo1
  - name: Mobile Money Operator 2
    slug: mmo2
```

## Test Steps

The remainder of the test case file is made up of a list of _test steps_. Each
step represents an HTTP request made as part of the test, and is defined by the
following values:

| Name                    | Description                                                                                                                                                      | Example                                                                                                                                             |
| :---------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `source`                | The sender of the request. Should be a slug from the `components` section of the test case. Will be used to [match incoming requests](/architecture/matching)    | <ul><li>`sp`</li><li>`mmo-1`</li><li>etc.</li></ul>                                                                                                 |
| `target`                | The recipient of the request. Should be a slug from the `components` section of the test case. Will be used to [match incoming requests](/architecture/matching) | <ul><li>`sp`</li><li>`mmo-1`</li><li>etc.</li></ul>                                                                                                 |
| `method`                | The request method that will be used to [match incoming requests](/architecture/matching).                                                                       | <ul><li>`POST`</li><li>`PUT`</li><li>etc.</li></ul>                                                                                                 |
| `pattern`               | A regular expression that will be used to [match incoming requests](/architecture/matching) using the request path.                                              | <ul><li>`^transactionRequests\$`</li><li>`^quotes/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\$`</li><li>etc.</li></ul> |
| `trigger`               | A JSON value that will be compared against incoming request bodies for [matching](/architecture/matching).                                                       | <ul><li>`{amount: '99'}`</li><li>etc.</li></ul>                                                                                                     |
| `api_spec`              | The API spec to perform automated schema validation. Should be a specification name from the database.                                                           | <ul><li>Mojaloop v1.0</li><li>MM v1.1.2</li><li>etc.</li></ul>                                                                                      |
| `path`                  | A path defined inside the API spec, which is used to lookup schema validation rules. Also used as a label for the step.                                          | <ul><li>`/quotes/{ID}`</li><li>`/transactionRequests`</li><li>etc.</li></ul>                                                                        |
| `mtls`                  | A boolean indicating whether an mTLS connection is required to execute this test step                                                                            | `true` or `false`                                                                                                                                   |
| `test_request_scripts`  | A list of business rule assertions that will be performed on the request.                                                                                        | _see below_                                                                                                                                         |
| `test_response_scripts` | A list of business rule assertions that will be performed on the HTTP response.                                                                                  | _see below_                                                                                                                                         |
| `request`               | A template HTTP request which will be used to generate test requests from a simulator.                                                                           | _see below_                                                                                                                                         |
| `response`              | A template HTTP response which will be used to generate test responses from a simulator.                                                                         | _see below_                                                                                                                                         |

#### Example of test steps

```yaml
test_steps:
  # Step 1. Mobile Money Operator 2 -> Mojaloop
  - source: mmo-2
    target: mojaloop
    method: PUT
    pattern: "^quotes/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$"
    trigger:
      transferAmount:
        amount: "99"
    api_spec: Mojaloop v1.0
    path: /quotes/{ID}
    test_request_scripts: # ...
    test_response_scripts: # ...
    request: # ...
    response: # ...

  # Step 2. Mobile Money Operator 1 -> Mojaloop
  - source: mmo-1
    target: mojaloop
    method: PUT
    pattern: "^quotes/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$"
    trigger:
      transferAmount:
        amount: "99"
    api_spec: Mojaloop v1.0
    path: /quotes/{ID}
    test_request_scripts: # ...
    test_response_scripts: # ...
    request: # ...
    response: # ...


  # ...
```

### Assertions (`test_request_scripts` and `test_response_scripts`)

Assertions are used to validate that certain business conditions hold in a more
powerful way than is possible using API schema validation. Where API schema
validation can only validate the _structure_ of a message, assertions can be
used to validate the _content_. Assertions can be performed for any value in the
header, body or uri of the request or response. In a response, the `status`
field may also be used for assertions.

Each request/response may have a number of assertions, and each assertion is
defined by a `name` and a list of Laravel validation `rules`. The key for each
rule is a path to a field using 'dot' syntax within the request/response object.
For more information on the syntax of these rules, visit the
[Laravel documentation site](https://laravel.com/docs/7.x/validation#available-validataion-rules).

In addition to the builtin Laravel validation rules, ITP defines a number of
custom validators targeting ILP Packets:

- `ilpPacketAmount`: Validates that the ILP packet contains the specified
  amount. If no value is provided, the `body.amount` field is used as a default.
- `ilpPacketExpiration`: Validates that the ILP packet contains the specified
  expiration date. If no value is provided, the `body.expiration` field is used
  as a default.
- `ilpPacketCondition`: Validates that the ILP packet contains the specified
  condition field. If no value is provided, the `body.condition` field is used
  as a default.
- `ilpPacketDestination`: Validates that the ILP packet contains the specified
  destination.

```yaml
test_request_scripts:
  - name: Amounts and currencies are specified correctly
    rules:
      body.transferAmount.amount: "required|in:99"
      body.transferAmount.currency: "required|regex:/^[A-Z]{3}/"
      body.payeeReceiveAmount.amount: "required|in:100"
      body.payeeReceiveAmount.currency: "required|regex:/^[A-Z]{3}/"
      body.payeeFspCommission.amount: "required|in:1"
      body.payeeFspCommission.currency: "required|regex:/^[A-Z]{3}/"
  - name: ILP Packet is well-formed
    rules:
      body.ilpPacket:
        - "required"
        - "regex:/^[A-Za-z0-9-_]+[=]{0,2}$/"
        - "ilpPacketAmount:99"
        - "ilpPacketDestination:g.gh.msisdn.{{ env.PHONE }}"
        - "ilpPacketCondition"
        - "ilpPacketExpiration"
  - name: Callback URL is specified
    rules:
      headers.x-callback-url.*: "required|url"
test_response_scripts:
  - name: Transaction was successfully accepted
    rules:
      status: "required|in:200"
```

### Request and Response Templates

Each test step is also defined by a template request and response. This is used
by the platform to generate simulated traffic for the components which are not
SUTs in a session. Additionally, the templates also provide documentation for
test platform users, to outline which data needs to be sent, or can be expected
from other components during test execution.

A `request` template is composed of the following fields:

| Name   | Description                               | Example                               |
| :----- | :---------------------------------------- | ------------------------------------- |
| method | The HTTP method used to make the request. | `GET`, `POST`                         |
| uri    | A path or URI used to make the request.   | `/quotes`, `/parties/{{ env.PARTY }}` |

The following fields may be used in both a `request` or `response` template:

| Name    | Description                                                                         | Example                                  |
| :------ | :---------------------------------------------------------------------------------- | ---------------------------------------- |
| headers | A list of headers to include in the request or response.                            | `[accept: "application/json"]`           |
| body    | A JSON payload for the request or response.                                         | `{amount: "1005", currency: "USD", ...}` |
| delay   | How many seconds the simulator should delay before sending the request or response. | `5`                                      |
| jws     | Configuration options for verifying and generating JWS signature headers.           |                                          |

Finally, the following fields may only be used in a `response` template:

| Name   | Description                                       | Example |
| :----- | :------------------------------------------------ | ------- |
| status | The status code that will be used for a response. | `200`   |

#### Example of a request and response

```yaml
test_steps:
  - #...
    request:
      method: POST
      uri: /transactions
      headers:
        accept: "application/json"
        content-type: "application/json"
        x-callback-url: "https://example.com/example"
        x-date: "2000-01-01T00:00:00.000Z"
      body:
        amount: "1005"
        currency: "USD"
        type: "merchantpay"
        debitParty:
          - key: "msisdn"
            value: "+33555123456"
        creditParty:
          - key: "msisdn"
            value: "+33555789123"
    response:
      status: 400
      headers:
        x-date: "2000-01-01T00:00:00.000Z"
        content-type: "application/json"
```

### JWS Signatures

The Interoperability Test Platform supports generation of JWS signatures by
simulators, and verification of JWS signatures sent by SUTs. Both are controlled
by adding a `jws` key to a test step request or response. The `jws`
configuration object includes two files which should be uploaded to the session
environment when the test case is executed - one for the public key (used to
validate the JWS signature) and one for the private key (used to generate the
JWS signature in simulators). Any normal environment variable may be used for
these fields (see "Template Variables" below).

| Name                   | Description                                                                                                           |
| :--------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| `alg` (optional)       | The JWS algorithm to use. Available values are `RS256` (default), `RS384`, `RS512`, `HS256`, `HS384`, `HS512`         |
| `key`                  | The private key used to generate a JWS signature                                                                      |
| `public_key`           | The public key used to validate a JWS signature                                                                       |
| `protectedHeaders`     | The request/response headers which will be included in the JWS signature                                              |
| `header`               | The name of the header which will contain the JWS signature                                                           |
| `transform` (optional) | The name of an additional transformation to apply to the signature. The only available value currently is `mojaloop`. |

The transform field exists because different implementations expect the JWS
signature in different formats. By default, the JWS signature will be directly
inserted into the HTTP header. With the `mojaloop` transform enabled, the
signature will be wrapped in a JSON object along with a `protectedHeaders`
field, and it is this object which is inserted into the HTTP header.

```yaml
test_steps:
  - # ...
    request:
      # ...
      jws:
        alg: RS256
        key: "{{ env.MMO_PRIVATE_KEY }}"
        public_key: "{{ env.MMO_PUBLIC_KEY }}"
        header: "FSPIOP-Signature"
        transform: mojaloop
        protectedHeaders:
          - FSPIOP-URI
          - FSPIOP-HTTP-Method
          - FSPIOP-Source
          - FSPIOP-Destination
          - Date
```

## Repeating Requests

It is sometimes desirable to test scenarios where a particular step may be
repeated several times before proceeding. As an example, an API based on polling
would require a simulator to make several "poll" requests before the final
answer is provided. This can be achieved through the `repeat` parameter of a
test step. `repeat` is defined by the following parameters:

| Name                    | Description                                                                                                                                      |
| :---------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| `condition`             | Responses returned to the platform will be compared against this condition. If the condition matches, the test run will repeat the request again |
| `max`                   | The maximum number of times the repeat condition may hold before the test is considered a failure.                                               |
| `response`              | A sample intermediate response which will be used by a simulator before moving on to the next step                                               |
| `count`                 | The number of times a simulator should send the intermediate response before moving on to the next step                                          |
| `test_response_scripts` | Optionally, you may specify some assertions to apply against the intermediate responses.                                                         |

```yaml
- path: /get-status
  pattern: "^get-status$"
  method: GET
  source: source-component
  target: target-component
  test_response_scripts:
    - name: Transaction was successfully accepted
      rules:
        body.result: "SUCCESS"
        status: "required|in:200"
  request:
    method: GET
    uri: /get-status

  # Final response, sent by a simulator after 2 occurrences
  response:
    status: 200
    body:
      result: "SUCCESS"

  repeat:
    # If a system responds to a simulated request with this body, we will repeat the request
    condition:
      body:
        result: "PENDING"
    # If the condition above holds more than 3 times, we will count it as a failure
    max: 3
    # Our simulator will send a "PENDING" response twice before sending "SUCCESS"
    count: 2
    response:
      status: 202
      body:
        updatedTime: '{{ "now" | date }}'
        result: "PENDING"
    # We want to check that "PENDING" responses sent by a system are well-formed
    test_response_scripts:
      - name: Request was received
        rules:
          body.result: "required|in:PENDING"
          status: "required|in:202"
```

## Template variables

It is often useful to include dynamic data within a test case. Some examples of
this are:

- To send a simulated request with a freshly generated UUID on each test run
- To include a field in a HTTP response which was dynamically provided in a
  preceding request
- To customise the test execution for a particular environment (e.g. to include
  a valid MSISDN registered within the SUT taking part in the test)

Template variables are a way to achieve the above by injecting values inside any
string within the `test_steps[*].request` and `test_steps[*].response` objects.
In addition, variables may be used inside the `rules` field of
`test_steps[*].test_request_scripts` and `test_steps[*].test_response_scripts`.

The test platform uses the powerful templating language
[Twig](https://twig.symfony.com/) to allow sandboxed execution of arbitrary
logic within the test case context. This allows us to create templates with
highly dynamic data - such as including data from previous messages, or
combining multiple sources of data using arithmetic. The syntax for Twig
template variables is `{{ twig_expression }}`.

A full description of the twig templating language is beyond the scope of this
documentation, although a detailed reference is available on the
[Twig website](https://twig.symfony.com/doc/3.x/).

Within a test case, the following context variables are available for use (in
addition to all of Twig's built-in functions and variables):

#### `env`

The `env` variable contains a reference to the variables defined within the
session when it is in execution. Two types of environment variable exist -
string variables and file variables. String variables will be replaced directly
inside the twig template as strings, whereas file variables will be inserted as
a file path. File variables are useful for providing a reference to a public or
private key in the `jws` field of a test step.

Any legal Javascript variable name may be used for an environment variable, but
the convention is to use "UPPER_SNAKE_CASE". It is often useful to document the
names of any variables used within a test case in the test case preconditions,
so that users of the test case can quickly verify that they have provided values
for all important variables to the test case.

```yaml
body:
  fromParty:
    msisdn: "{{ env.MMO1_PARTY_MSISDN }}"
  toParty:
    msisdn: "{{ env.MMO2_PARTY_MSISDN }}"
```

#### `steps`

The `steps` variable contains a reference to all previously executed test steps
in the test case. In the following example, we use `steps` in combination with
twig's ability to perform arithmetic to simulate a constant fee of 1 USD being
applied to the amount requested in a previous step:

```yaml
body:
  transferAmount:
    currency: "USD"
    amount: "{{ steps.7.request.body.amount.amount + 1 }}"
```

#### `uuidv4`

The `uuidv4()` function can be used to generate a unique UUID for a request. It
can be used in conjunction with `steps` as described above to correlate a UUID
across several steps:

```yaml
request:
  # ...
  body:
    serverCorrelationId: "{{ uuidv4() }}"
response:
  # ...
  body:
    requestId: "{{ steps.4.request.body.serverCorrelationId }}"
```

#### `"now"`

Parsing date-like strings such as `"now"` is a builtin feature of Twig, but it
is documented here separately as a useful tool in building test cases. Using
Twig filters, you can format a date using any format string:

```yaml
headers:
  X-Date: '{{ "now" | date("F j, Y, g:i a") }}'
  X-Future-Date: '{{ "+1 hour" | date("F j, Y, g:i a") }}'
```

#### `mapped_urls`

It is sometimes useful to be able to refer to a component by URL in a test
case - for example to generate a dynamic callback URL. This can be achieved with
the `mapped_urls` variable. These will contain the same URLs that are displayed
to the user during the session creation wizard.

The format is `mapped_urls["from-component-slug"]["to-component-slug"]`.

```yaml
headers:
  X-Callback-URL: '{{ mapped_urls["mmo1"]["sp"] }}/callback'
  # If a slug is alphanumeric, it is possible to use dot syntax instead:
  X-Error-Callback-URL: "{{ mapped_urls.mmo1.sp }}/error"
```

#### ILP Functions

In order to generate ILP variables, the following functions have been defined:

- `ilpFulfilment()`: Generates a value for the ILP fulfilment
- `ilpCondition( fulfilment )`: Generates a condition based on a fulfilment
- `ilpPacket( amount, expires, condition, destination, data)`: Generates an ILP
  packet
- `base64_urlencode`: Applies a base64_url encoding
- `base64_urldecode`: Decodes a base64_url encoded string

```
  body:
    condition: '{{ ilpCondition(ilpFulfilment())  | base64_urlencode }}'
    expiration: '{{ "+1 hour" | date("Y-m-d\\TH:i:s.vP")}}'
    ilpPacket: '{{
        ilpPacket(
          steps.6.request.body.amount.amount,
          "+1 hour",
          ilpCondition(ilpFulfilment()),
          "g.gh.msisdn.#{steps.6.request.body.payee.partyIdInfo.partyIdentifier}",
          ""
        ) | base64_urlencode
      }}'
```