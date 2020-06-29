---
id: creation
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
of common values, in addition to step-specific parameters such as _assertions_,
_overrides_ and _request and response examples_.

### Common Values

These common values are present in every step of the test case.

| Name       | Description                                                                                                                           | Example                                                                                                                                             |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `method`   | The request method that will be used to [match a message](/architecture/matching).                                                    | <ul><li>`POST`</li><li>`PUT`</li><li>etc.</li></ul>                                                                                                 |
| `pattern`  | The a regular expression will be used to [match a message](/architecture/matching) using the request path.                            | <ul><li>`^transactionRequests\$`</li><li>`^quotes/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\$`</li><li>etc.</li></ul> |
| `path`     | The path that will be shown on Flow Diagrams and on Test Run steps that were not executed.                                            | <ul><li>`/quotes/{ID}`</li><li>`/transactionRequests`</li><li>etc.</li></ul>                                                                        |
| `source`   | The sender of the request. Should be a Component name from the database. Will be used to [match a message](/architecture/matching)    | <ul><li>Service Provider</li><li>Mobile Money Operator 1</li><li>Mojaloop </li><li>Mobile Money Operator 2</li></ul>                                |
| `target`   | The recipient of the request. Should be a Component name from the database. Will be used to [match a message](/architecture/matching) | <ul><li>Service Provider</li><li>Mobile Money Operator 1</li><li>Mojaloop </li><li>Mobile Money Operator 2</li></ul>                                |
| `trigger`  | The trigger value(s) that should be used to [match a message](/architecture/matching).                                                | <ul><li>`{amount: '99'}`</li><li>etc.</li></ul>                                                                                                     |
| `api_spec` | The API spec to perform schema validation. Should be a Specification name from the database.                                          | <ul><li>Mojaloop v1.0</li><li>MM v1.1.2</li><li>etc.</li></ul>                                                                                      |

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

Assertions can be used to validate that certain business conditions hold, in a
more powerful way than is possible using API schema validation. Assertions can
be performed for any value in the header or body of the request or response. In
a response, the `status` field may also be used for assertions.

| Name                    | Description                                                        |
| :---------------------- | :----------------------------------------------------------------- |
| `test_request_scripts`  | A list of assertions that will be performed for the request.       |
| `test_response_scripts` | A list of assertions that will be performed for the HTTP response. |

Each request/response may have a number of assertions, and each assertion is
defined by a `name` and a list of Laravel validation `rules`. The key for each
rule is a path to a field using 'dot' syntax within the request/response object.
For more information on the syntax of these rules, visit the
[Laravel documentation site](https://laravel.com/docs/7.x/validation#available-validataion-rules).
Each validation rule should contain the `required` rule at least, otherwise the
assertion may pass even if the value is wrong or empty.

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
    test_response_scripts:
      - name: Transaction was successfully accepted
        rules:
          status: "required|in:200"
```

### Overrides

Overrides are used in situations where it is necessary to force a value provided
by a simulator to have a different value for the purposes of directing the test
flow.

| Name                   | Description                                                                                                                                                                        |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `test_request_setups`  | The list of overrides that will be performed for the request.                                                                                                                      |
| `test_response_setups` | The list of overrides that will be performed for the response.                                                                                                                     |
| `name`                 | The name of the override that will be shown on the Test Step page.                                                                                                                 |
| `values`               | The list of overrides that should be performed per request/response. Overriding will override the existing values in the message or create a new one if it does not already exist. |

Override values can either be provided using dot-notation to override a single
value, or a whole object can be overridden by providing an object as in the
`Force 400 error` example below, where an object has been passed to the `body`
field.

```yaml
test_steps:
  - #...
    test_request_setups:
      - name: Override request amounts
        values:
          body.transferAmount.currency: "USD"
          body.transferAmount.amount: "399"
          body.payeeReceiveAmount.currency: "USD"
          body.payeeReceiveAmount.amount: "398"
          body.payeeFspFee.currency: "USD"
          body.payeeFspFee.amount: "1"

    test_response_setups:
      - name: Force 400 error
        values:
          status: 400
          body:
            errorCode: "genericError"
            errorCategory: "businessRule"
            errorDateTime: "2000-01-01T00:00:00.000Z"
            errorDescription:
              "The specified property contents do not conform to the format
              required for this Property."
```

### Request and Response Examples

Each test step is also defined by an example request and response. This provides
guidance for test platform users, to identify what data he needs to send or can
expect to receive during the test execution. Importantly, the example request
defined in the first test step is also used by the test platform to trigger the
start of a test run when the "Execute Test" button is clicked within the test
platform.

| Name    | Description                                       |
| :------ | :------------------------------------------------ |
| method  |                                                   |
| uri     | An example path or URI for this request/response. |
| headers | A list of expected headers.                       |
| body    | An example payload for the request/response.      |
| status  | Example response status.                          |

#### Model of a request and response example in a YAML file

```yaml
test_steps:
  - #...
    request:
      method: POST
      uri: /transactions
      headers:
        accept: "application/json"
        content-type: "application/json"
        x-callback-url: "http://example.com/example"
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
