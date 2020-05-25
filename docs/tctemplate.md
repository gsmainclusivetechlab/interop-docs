---
id: tctemplate
title: Test Case Template
sidebar_label: TC Template
---


This manual describes how to fill in the Test Case .yaml, what fields it should contain and how they are used in ITP.

## Test Case data

This is the first layer of the data that contains the info about the Test Case itself.
They are:

TABELA

| Name | Description | Example |
|:-----|:------------|---------|
|name|The name of the Test Case that will be shown to users. Names may not be unique. So it is possible to have Test Cases with the same name. |Authorized Transaction by Payer FSP|
|use_case|The name of the Use Case that the Use Case is related to. Names may not be unique. So it is possible to have Use Cases with the same name. |Merchant-Initiated Merchant Payment|
|behavior| Shows the type of the Test Case, i.e. the folder inside the Use Case for the Test Case. Folders are Happy flow and Unhappy flow. |<ul><li>positive</li><li>negative</li></ul>|
|description| Just the description of the Test Case. Some business background of what we are trying to achieve in this case. |The Service Provider wants to test if he is capable of receiving a transaction from a different wallet...|
|precondition| An additional area where specific values that should be used to execute a Test Case can be put. Test Case may require using some defined amounts| - Amount should be the value "1001". - Debit party should be identified by account identifier "msisdn" with the value "+33555123456".|
|components| The list of Components that the Test Case is applicable for. Some Test Cases can be applicable for MMOs only (P2P transfer) or contain some specific errors that can only be received by SUT and not handled by it. |- Service Provider - Mobile Money Operator 1 - Mobile Money Operator 2 Or any combination of them|
|test_steps| Indicates the start of Test Steps data.| |

The whole Test Case info may look like:

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

## Test Step data

The second lawyer of the yaml file is the description of all Test Steps one-by-one. 
Test Steps contains very much information so it will be divided into smaller sections.

### Global values

Tabela

Example of global values:

```yaml
  - path: /quotes/{ID}
    pattern: '^quotes/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'
    method: PUT
    source: Mojaloop
    target: Mobile Money Operator 1
    api_spec: Mojaloop v1.0
    trigger:
      transferAmount:
        amount: '99'
```

## Assertions

Assertions can be performed for any value in the header or body of the Request or Response. Status may also be set for Response.

TABELA

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

## Overridings

tbc
