---
id: creation
title: Test Case Template
sidebar_label: Creating a Test Case
---

The ITP test cases are described using YAML files. Each file is composed of
several fields that are interpreted by the platform to carry out tests and
validations of the different use cases paths. Thus, the purpose of this manual
is to describe the basic model of a YAML file for ITP. Using this template it is
possible to understand how the fields are used by the ITP and how to create (or
propose) new test cases.

## Proposing New Test Cases

Any party interested in using the Interoperability Test Platform can propose new
test cases using the template presented here. For this, it is important to
follow the creation guide starting from a use case, to understand its
application context, then determine which paths should/need to be tested. Then,
it is possible to use the template shown here to create the test cases for each
path. Therefore, the creation of new test cases is based on the following
roadmap:

1. Elaboration and understanding of the scenario you want to test;
2. Creation of a use case that can be implemented by ITP;
3. Description of the use case following the model available at INSERT LINK;
4. Definition of the paths that should be tested for the use case (happy and
   unhappy flows);
5. Preparation of each test case following the model present in this manual.

## Test Case Data

The Test Case Data is the first part of the yaml file. It contains seven fields
used as a header to specify particular characteristics related to the test case
and the use case it belongs to. Below you can see a table with the fields used
in the header and an example of the test case data in a yaml file.

| Name         | Description                                                                                                                                                                                                         | Example                                                                                                                                                   |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name         | The name of the Test Case that will be shown to users. Names may not be unique. So it is possible to have Test Cases with the same name.                                                                            | Authorized Transaction by Payer FSP                                                                                                                       |
| use_case     | The name of the Use Case that the Use Case is related to. Names may not be unique. So it is possible to have Use Cases with the same name.                                                                          | Merchant-Initiated Merchant Payment                                                                                                                       |
| behavior     | Shows the type of the Test Case, i.e. the folder inside the Use Case for the Test Case. Folders are Happy flow and Unhappy flow.                                                                                    | <ul><li>positive</li><li>negative</li></ul>                                                                                                               |
| description  | Just the description of the Test Case. Some business background of what we are trying to achieve in this case.                                                                                                      | The Service Provider wants to test if he is capable of receiving a transaction from a different wallet...                                                 |
| precondition | An additional area where specific values that should be used to execute a Test Case can be put. Test Case may require using some defined amounts                                                                    | <ul><li>Amount should be the value "1001"</li><li>Debit party should be identified by account identifier "msisdn" with the value "+33555123456"</li></ul> |
| components   | The list of Components that the Test Case is applicable for. Some Test Cases can be applicable for MMOs only (P2P transfer) or contain some specific errors that can only be received by SUT and not handled by it. | <ul><li>Service Provider</li><li>Mobile Money Operator 1</li><li>Mobile Money Operator 2 Or any combination of them</li></ul>                             |
| test_steps   | Indicates the start of Test Steps data.                                                                                                                                                                             |                                                                                                                                                           |

#### Example of test case data in a yaml file

```yaml
name: Authorized Transaction by Payer FSP
use_case: Merchant-Initiated Merchant Payment
behavior: positive
description: |
  The Service Provider wants to test if he is capable of receiving a transaction from a different wallet provider that he has an account. In this case, we simulate the scenario when the Payer would like to buy goods or services from a Service Provider (the Payee), but each of them uses different wallet providers. This flow shows the necessary steps for this transaction simulating an approved transaction.
precondition: |
  - Service Provider has GSMA Mobile Money API Implemented.
  - Service Provider is capable of handled async calls.
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
```

## Test Step Data

The second part of the test case file is called Test Step Data. This part is
determined by the field **_test_steps_** followed by the fields that determine
the necessary attributes for each step of the performed test. The steps of a
test case can cover a variety of information namely: _assertions_, _overridings_
and _request and response examples_. Thus, this section will be presented by
groups of fields existing in the test steps.

### Global values

The global values are presented in each transaction and contains information
about it.

| Name     | Description                                                                                                                                                        | Example                                                                                                                                         |
| :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| path     | The path that will be shown on Flow Diagrams and on Test Run steps that were not executed.                                                                         | <ul><li>/quotes/{ID}</li><li>/transactionRequests</li><li>etc.</li></ul>                                                                        |
| pattern  | The value of path that will be used to match a message, received by Test Control with Step in active Test Run.                                                     | <ul><li>^transactionRequests\$</li><li>^quotes/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\$</li><li>etc.</li></ul> |
| method   | The method of the message that will be used to match a message, received by Test Control with Step in active Test Run.                                             | <ul><li>POST</li><li>PUT</li><li>etc.</li></ul>                                                                                                 |
| source   | The sender of the message. Should be a Component name from the database. Will be used to match a message, received by Test Control with Step in active Test Run    | <ul><li>Service Provider</li><li>Mobile Money Operator 1</li><li>Mojaloop </li><li>Mobile Money Operator 2</li></ul>                            |
| target   | The recipient of the message. Should be a Component name from the database. Will be used to match a message, received by Test Control with Step in active Test Run | <ul><li>Service Provider</li><li>Mobile Money Operator 1</li><li>Mojaloop </li><li>Mobile Money Operator 2</li></ul>                            |
| api_spec | The API spec to perform schema validation. Should be a Specification name from the database.                                                                       | <ul><li>Mojaloop v1.0</li><li>MM v1.1.2</li><li>etc.</li></ul>                                                                                  |
| trigger  | The trigger value(s) that should be used to match a message, received by Test Control with Step in active Test Run.                                                | <ul><li>amount: '99'</li><li>etc.</li></ul>                                                                                                     |

#### Example of Global Values in a yaml file

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

Assertions can be performed for any value in the header or body of the Request
or Response. Status may also be set for Response.

| Name                  | Description                                                                                                                                                                                                                                                                                                                      | Example                                                                                                                                                                                    |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| test_request_scripts  | The list of assertions that will be performed for Request.                                                                                                                                                                                                                                                                       |                                                                                                                                                                                            |
| test_response_scripts | The list of assertions that will be performed for Response.                                                                                                                                                                                                                                                                      |                                                                                                                                                                                            |
| name                  | The name of the exact Assertion that will be shown on the Test Step page. Request/Response may have many assertions.                                                                                                                                                                                                             | Amounts and currencies are specified correctly                                                                                                                                             |
| rules                 | The list of rules that should be performed per Assertions. _NOTE: set required for all assertions so that they can be performed properly, otherwise Assertion will be passed even if value is wrong or empty. Rules can be a single value or a regex. Rules are applicable for any response status and value in header or body._ | <ul><li>headers.x-callback-url.\*: 'required&#124;regex:/.\*/'</li><li> body.transferAmount.amount: 'required &#124;in:99'</li><li>status: 'required &#124;in:200'</li> <li>etc.</li></ul> |

Example of assertions:

```yaml
test_request_scripts:
      - name: Amounts and currencies are specified correctly
        rules:
          body.transferAmount.amount: 'required|in:99'
          body.transferAmount.currency: 'required|regex:/^[A-Z]{3}/'
          body.payeeReceiveAmount.amount: 'required|in:100'
          body.payeeReceiveAmount.currency: 'required|regex:/^[A-Z]{3}/'
          body.payeeFspCommission.amount: 'required|in:1'
          body.payeeFspCommission.currency: 'required|regex:/^[A-Z]{3}/'

    test_response_scripts:
      - name: Transaction was successfully accepted
        rules:
          status: 'required|in:200'
```

### Overridings

Overridings are used in situations where it is necessary to force an overriding
of a value for the request or the response in a transaction.

| Name                 | Description                                                                                                                                                                                                                                                                                                             | Example                                                                                                                                                                                                            |
| :------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| test_request_setups  | The list of overridings that will be performed for Request.                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                    |
| test_response_setups | The list of overridings that will be performed for Response.                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                    |
| name                 | The name of the exact Override that will be shown on the Test Step page. Request/Response may have many overrides.                                                                                                                                                                                                      | Override request                                                                                                                                                                                                   |
| values               | The list of overrides that should be performed per Request/Response. Overriding will override the existing values in the message or create a new one if it aleady exists. _Note: Single values can be overridden using model 1 from the example and full body/header can be overridden using model 2 from the example._ | Model 1:<ul><li>`body.transferAmount.currency: 'USD'`</li><li>`body.transferAmount.amount: '399`</li></ul> Model 2 <ul><li>`body:` <br/> `errorCode:"genericError"` <br/> `errorCategory:"businessRule"`</li></ul> |

#### Example of overriding in a yaml file

```yaml
test_request_setups:
  - name: Override request
    values:
      body.transferAmount.currency: "USD"
      body.transferAmount.amount: "399"
      body.payeeReceiveAmount.currency: "USD"
      body.payeeReceiveAmount.amount: "398"
      body.payeeFspFee.currency: "USD"
      body.payeeFspFee.amount: "1"

test_response_setups:
  - name: Override response
    values:
      status: 400
      body:
        errorCode: "genericError"
        errorCategory: "businessRule"
        errorDateTime: "2000-01-01T00:00:00.000Z"
        errorDescription:
          "The specified property contents do not conform to the format required
          for this Property."
```

### Request and Response Examples

They are used to generate examples of expected Request and Response per all
Steps in Test Case. This is a kinda some kind of a guide for a user, so he can
find what data he needs to send or receive during the Test Case.

| Name     | Description                                                                         | Example                                                                                                                                                                                                            |
| :------- | :---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| request  | The list of example data for Request.                                               |                                                                                                                                                                                                                    |
| response | The list of example data for Response.                                              |                                                                                                                                                                                                                    |
| method   |                                                                                     | <ul><li>POST</li><li>PUT</li><li>GET</li><li>etc.</li></ul>                                                                                                                                                        |
| uri      | Just an example of URI that can happen on this stage.                               | <ul><li>/participants/MSISDN/33555123456</li><li>/transactionsRequests/950b88b3-cbcc-4f5d-92e7-46666529a7b6</li><li>/quotes/ba2a764f-41d0-4b47-a774-dfe51012b04a/error</li><li>/transactions</li><li>etc</li></ul> |
| headers  | Start for the list of values for the header. All exact values to be defined inside. | <ul><li>content-type: 'application/vnd.interoperability.quotes+json;version=1.0'</li><li>fspiop-source: 'payeefsp'</li><li>fspiop-destination: 'payerfsp'</li></ul>                                                |
| body     | Start for the list of values for the body. All exact values to be defined inside.   | <ul><li>transferAmount:<br/>&nbsp;&nbsp;currency: 'USD'<br/>&nbsp;&nbsp;amount: '1002'</li><li>expiration:<br/>&nbsp;&nbsp;'2000-01-01T00:00:00.000Z'</li></ul>                                                    |
| status   | Just a value for response status.                                                   | <ul><li>200</li><li>400</li><li>etc</li></ul>                                                                                                                                                                      |

#### Model of a request and response example in a yaml file

```yaml
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
