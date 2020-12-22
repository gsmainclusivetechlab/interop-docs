---
title: Test Case Template
sidebar_label: Creating a Test Case
---

The ITP test cases are defined using YAML files. Each file is composed of
several fields that are interpreted by the platform to carry out tests and
validations of the different use cases paths. This page describes the basic
model of a YAML file for the test platform.

## Proposing New Test Cases

Any party interested in using the Interoperability Test Platform can propose new
test cases using the template presented here. For this, it is important to
follow the creation guide [starting from a use case](/usecases/creation), to
understand its application context, then determine which paths should/need to be
tested. Then, it is possible to use the template shown below to create the test
cases for each path. The creation of new test cases is based on the following
roadmap:

1. Elaboration and understanding of the scenario you want to test;
2. Creation of a use case that can be implemented by ITP;
3. Description of the use case following the model available
   [here](/usecases/creation);
4. Definition of the paths that should be tested for the use case (happy and
   unhappy flows);
5. Preparation of each test case following the model below.

## Test Case Data

The Test Case Data is the first part of the YAML file. It contains seven fields
used as a header to specify particular characteristics related to the test case
and the use case it belongs to. Below you can see a table with the fields used
in the header and an example of the test case data in a YAML file.

| Name           | Description                                                                                                                                                                                       | Example                                                                                                                                 |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `name`         | The name of the Test Case that will be shown to users. Names do not need to be unique, so it is possible to have multiple Test Cases with the same name.                                          | Authorized Transaction by Payer FSP                                                                                                     |
| `use_case`     | The name of the Use Case that the Use Case is related to. This should be identical for all Test Cases sharing a Use Case.                                                                         |
| `behavior`     | Defines the type of the Test Case, i.e. "Happy flow" (`positive`) and "Unhappy flow" (`negative`).                                                                                                | <ul><li>`positive`</li><li>`negative`</li></ul>                                                                                         |
| `description`  | A description of the Test Case. It is useful to include some business background of what we are trying to achieve in this case.                                                                   | The Service Provider wants to test if he is capable of receiving a transaction from a different wallet...                               |
| `precondition` | An additional area describing specific values that should be used to execute a Test Case. This may include directions for using test case [triggers](/architecture/matching).                     |
| `components`   | A list of components involved in the that the Test Case. Some Test Cases involve MMOs only (P2P transfer) or contain some specific errors that can only be received by SUT and not handled by it. | <ul><li>Service Provider</li><li>Mobile Money Operator 1</li><li>Mobile Money Operator 2</li><li>Any combination of the above</li></ul> |
| `test_steps`   | Contains details of the steps involved in the test case.                                                                                                                                          |

#### Example of test case data in a YAML file

```yaml
name: Authorized Transaction by Payer FSP
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
components:
  - Service Provider
  - Mobile Money Operator 1
  - Mobile Money Operator 2
test_steps:
  # ...
```

## Test Step Data

The second part of the test case file is called Test Step Data. Each step
represents an HTTP request made as part of the test, and is defined by a series
of basic values, in addition to detailed parameters such as _assertions_, and
_request and response templates_.

### Common Values

These common values are present in every step of the test case.

| Name       | Description                                                                                                                              | Example                                                                                                                                             |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `api_spec` | The API spec to perform schema validation. Should be a Specification name from the database.                                             | <ul><li>Mojaloop v1.0</li><li>MM v1.1.2</li><li>etc.</li></ul>                                                                                      |
| `method`   | The request method that will be used to [match a message](/architecture/matching).                                                       | <ul><li>`POST`</li><li>`PUT`</li><li>etc.</li></ul>                                                                                                 |
| `pattern`  | A regular expression will be used to [match a message](/architecture/matching) using the request path.                                   | <ul><li>`^transactionRequests\$`</li><li>`^quotes/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\$`</li><li>etc.</li></ul> |
| `path`     | The path used to match a request against the API spec. Will also be shown on Flow Diagrams and on Test Run steps that were not executed. | <ul><li>`/quotes/{ID}`</li><li>`/transactionRequests`</li><li>etc.</li></ul>                                                                        |
| `source`   | The sender of the request. Should be a Component name from the database. Will be used to [match a message](/architecture/matching)       | <ul><li>Service Provider</li><li>Mobile Money Operator 1</li><li>Mojaloop </li><li>Mobile Money Operator 2</li></ul>                                |
| `target`   | The recipient of the request. Should be a Component name from the database. Will be used to [match a message](/architecture/matching)    | <ul><li>Service Provider</li><li>Mobile Money Operator 1</li><li>Mojaloop </li><li>Mobile Money Operator 2</li></ul>                                |
| `trigger`  | The trigger value(s) that should be used to [match a message](/architecture/matching).                                                   | <ul><li>`{amount: '99'}`</li><li>etc.</li></ul>                                                                                                     |

#### Example of Global Values in a YAML file

```yaml
- path: /quotes/{ID}
  pattern: "^quotes/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$"
  method: PUT
  source: Mojaloop
  target: Mobile Money Operator 1
  api_spec: Mojaloop v1.0
  trigger:
    transferAmount:
      amount: "99"
```

### Assertions

Assertions are used to validate that certain business conditions are true, in a
more powerful way than is possible using API schema validation. Where API schema
validation can only validate the _structure_ of a message, assertions can be
used to validate the _content_. Assertions can be performed for any value in the
header or body of the request or response. In a response, the `status` field may
also be used for assertions.

| Name                    | Description                                                        |
| :---------------------- | :----------------------------------------------------------------- |
| `test_request_scripts`  | A list of assertions that will be performed for the request.       |
| `test_response_scripts` | A list of assertions that will be performed for the HTTP response. |

Each request/response may have a number of assertions, and each assertion is
defined by a `name` and a list of Laravel validation `rules`. The key for each
rule is a path to a field using 'dot' syntax within the request/response object.
For more information on the syntax of these rules, visit the
[Laravel documentation site](https://laravel.com/docs/7.x/validation#available-validataion-rules).

```yaml
test_steps:
  - #...
    test_request_scripts:
      - name: Amounts and currencies are specified correctly
        rules:
          body.transferAmount.amount: "required|in:99"
          body.transferAmount.currency: "required|regex:/^[A-Z]{3}/"
          body.payeeReceiveAmount.amount: "required|in:100"
          body.payeeReceiveAmount.currency: "required|regex:/^[A-Z]{3}/"
          body.payeeFspCommission.amount: "required|in:1"
          body.payeeFspCommission.currency: "required|regex:/^[A-Z]{3}/"
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
SUTs in a session. Additionally, the templates also provide guidance for test
platform users, to outline which data needs to be sent, or can be expected from
other components during test execution.

| Name    | Description                                              |
| :------ | :------------------------------------------------------- |
| method  | The HTTP method used to make the request.                |
| uri     | A path or URI for used to make the request.              |
| headers | A list of headers to include in the request or response. |
| body    | A JSON payload for the request or response.              |
| status  | The status code that will be used for a response.        |

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

## Template variables

:::warning

Using variables in test cases is under active development, and is subject to
change at very short notice.

:::

It is often useful to include dynamic data within a test case. Some examples of
this are:

- To send a simulated request with a freshly generated UUID on each test run
- To include a field in a HTTP response which was dynamically provided in the
  preceding request
- To customise the test execution for a particular environment (e.g. to include
  an authorization token belonging to the owner of the session)

Template variables are a way to achieve the above by injecting values inside any
string inside the `test_steps[*].request` and `test_steps[*].response` objects.
Currently, there are two types of template variables although future releases of
the interoperability test platform will unify both types under "Twig Template
Variables".

### Environment Variables

Environment variables are primarily used to inject data which is unique to a
particular session, such as the URLs of the various test components (useful for
including callback URLs in a request header, for example). The syntax for using
an environment variable is `${ ENVIRONMENT_VARIABLE_NAME }`. The variables
available for use are:

| Name                             | Description                                                                                                                                                          |
| :------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SP_BASE_URI`                    | The url specified during session creation for the service provider component. If the component is simulated, then the simulator URL will be provided instead.        |
| `MMO1_BASE_URI`                  | The url specified during session creation for the Mobile Money Operator 1 component. If the component is simulated, then the simulator URL will be provided instead. |
| `MOJALOOP_BASE_URI`              | The url specified during session creation for the Mojaloop component. If the component is simulated, then the simulator URL will be provided instead.                |
| `MMO2_BASE_URI`                  | The url specified during session creation for the Mobile Money Operator 2 component. If the component is simulated, then the simulator URL will be provided instead. |
| `CURRENT_TIMESTAMP_ISO8601`      | The current time, formatted as an ISO8601 timestamp.                                                                                                                 |
| `CURRENT_TIMESTAMP_ISO8601_ZULU` | The current time, formatted as an ISO8601 Zulu timestamp.                                                                                                            |
| `CURRENT_TIMESTAMP_RFC2822`      | The current time, formatted as an RFC2822 timestamp.                                                                                                                 |
| `CURRENT_TIMESTAMP_RFC7231`      | The current time, formatted as an RFC7231 timestamp.                                                                                                                 |

Additionally, any variable that the user provides in the session environment may
be used. If a test case relies on environment variables being provided in this
way, it should be documented in the test case `preconditions` section.

### Twig Template Variables

[Twig](https://twig.symfony.com/) is a powerful templating language which allows
sandboxed execution of arbitrary logic within the test case context. This allows
us to create templates with highly dynamic data - such as including data from
previous messages, or combining multiple sources of data using arithmetic. The
syntax for Twig template variables is `{{ twig_expression }}`.

A full description of the twig templating language is beyond the scope of this
documentation, although a detailed reference is available on the
[Twig website](https://twig.symfony.com/doc/3.x/).

Within a test case, the following context variables are available for use (in
addition to all of Twig's built-in functions and variables):

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

Parsing the string `"now"` is a builtin feature of Twig, but it is documented
here separately as a useful tool in building test cases. Using Twig filters, you
can avoid the use of the static environment variables described above for
formatting dates, and instead format a date using any format string:

```yaml
headers:
  X-Date: '{{ "now" | date("F j, Y, g:i a") }}'
```

## Using the Test Case visual Editor

Although test cases are often quicker to produce using the YAML syntax, it is
also possible for users with the Test Case Creator role to edit test cases
directly through the web interface.
