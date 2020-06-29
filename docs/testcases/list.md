---
id: list
title: ITP Test Cases
sidebar_label: List of Test Cases
---

Where an ITP [Use Case](/usecases/intro) represents the different goals that
actors within the system might have, a _test case_ represents a specific path
taken to achieve a goal. Test cases are separated into "_happy_" and "_unhappy_"
so that they cover all the possibilities for a use case. Tests typically include
several alternative paths that evaluate the exceptions and errors in the use
case. It is also possible that there are several happy paths, addressing
different business rules that result in different intended outcomes.

All test cases currently available on the Interoperability Test Platform are
listed below. As new test cases are created, the documentation, and therefore
the list, will be updated. The list of test cases is split according to use
cases and contains the following attributes:

**Test Case Code:** Code that identifies the test case in relation to the
others. The code consists of two parts: an acronym that is directly related to
the use case, and a code that differentiates tests for the test group to which
it belongs (e.g. P2P0057 is the test case 0057 for the use case P2P).

**Test Case Scenario:** This field is made up of properties that define the
scenario in which the test case is being executed. These are the specific
parameters that define a scenario, such as: fees and commissions involved, use
of an account lookup system, currencies supported by the provider, etc.

**Status:** Expected results after running the test case. The result indicates
whether the evaluated path is a "happy" flow or "unhappy" flow.

**Results:** The results field indicates the expected behaviour for test cases
under validation. Particularly when dealing with rejected transactions, the
value of this attribute gives a better understanding of the reason for not
carrying out the transaction.

**Error Number:** Indicates the number of the current error for the test case.
This will generally be a 3-digit (for HTTP errors) or 4-digit (for Mojaloop
errors) error code, which can be understood with reference to the documentation
for the APIs under test. For example, the Error Number 5103 corresponds to the
[Mojaloop error](https://github.com/mojaloop/mojaloop-specification/blob/master/documents/Logical%20Data%20Model.md#464-payee-errors--5xxx)
indicating that the Payee doesn’t want to proceed with the financial transaction
after receiving a quote.

## List of Test Cases <a name="tc"></a>

### Merchant-Initiated Merchant Payment <a name="mimp"></a>

|                                                                                 Test Case                                                                                 | Test Scenario                                 |                  Results                  | Status | Error |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | --------------------------------------------- | :---------------------------------------: | :----: | :---: |
|          [MC0100](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-transaction.yaml)           | Authorized Transaction                        |                 Approved                  |  Pass  |   -   |
|      [MC0200](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-with-account-lookup.yaml)       | Authorized Transaction w/ Account Lookup      |                 Approved                  |  Pass  |   -   |
|        [MC0300](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-with-authorizationcode.yaml)         | Authorized Transaction w/ Authorisation Codes |                 Approved                  |  Pass  |   -   |
|       [MC0400](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-400.yaml)       | Declined Transacation                         |                 Declined                  |  Fail  |  400  |
|       [MC0500](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-401.yaml)       | Declined Transacation                         |                 Declined                  |  Fail  |  401  |
|       [MC0600](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-404.yaml)       | Declined Transacation                         |                 Declined                  |  Fail  |  404  |
|       [MC0700](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-500.yaml)       | Declined Transacation                         |                 Declined                  |  Fail  |  500  |
|       [MC0800](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-503.yaml)       | Declined Transacation                         |                 Declined                  |  Fail  |  503  |
|        [MC5001](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/rejected-quote-by-payee-fsp.yaml)        | Rejected Quote                                |          Quote Rejected by Payee          |  Fail  | 5103  |
|     [MC5002](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/rejected-transaction-by-payer-fsp.yaml)     | Rejected Transaction                          | Transaction Request Rejected Late by Payer |  Fail  | 4101  |
| [MC5003](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/rejected-transaction-request-by-payer-fsp.yaml) | Rejected Transaction Request                  |   Transaction Request Rejected by Payer   |  Fail  | 4101  |

### Customer-Initiated Merchant Payment <a name="cimp"></a>

:::note Under development

:::

### Peer to Peer <a name="p2p"></a>

|                                                              Test Case                                                              | Test Scenario                                                                                                            |         Results         | Status | Error |
| :---------------------------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------ | :---------------------: | :----: | :---: |
| [P2P0100](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0100.yml) | <ul><li>P2P Transfer</li> <li>Account Lookup: No</li> <li> AmountType: Receive </li><li> Fees: Non-Disclosing</li></ul>  |        Approved         |  Pass  |   -   |
| [P2P0200](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0200.yml) | <ul><li>P2P Transfer</li> <li>Account Lookup: No</li> <li> AmountType: Send </li><li> Fees: Non-Disclosing</li></ul>     |        Approved         |  Pass  |   -   |
| [P2P0300](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0300.yml) | <ul><li>P2P Transfer</li> <li>Account Lookup: No</li> <li> AmountType: Receive </li><li> Fees: Disclosing</li></ul>      |        Approved         |  Pass  |   -   |
| [P2P0400](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0400.yml) | <ul><li>P2P Transfer</li> <li>Account Lookup: No</li> <li> AmountType: Send </li><li> Fees: Disclosing</li></ul>         |        Approved         |  Pass  |   -   |
| [P2P0500](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0500.yml) | <ul><li>P2P Transfer</li> <li>Account Lookup: Yes</li> <li> AmountType: Receive </li><li> Fees: Non-Disclosing</li></ul> |        Approved         |  Pass  |   -   |
| [P2P0600](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0600.yml) | <ul><li>P2P Transfer</li> <li>Account Lookup: Yes</li> <li> AmountType: Send </li><li> Fees: Non-Disclosing</li></ul>    |        Approved         |  Pass  |   -   |
| [P2P0700](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0700.yml) | <ul><li>P2P Transfer</li> <li>Account Lookup: Yes</li> <li> AmountType: Receive </li><li> Fees: Disclosing</li></ul>     |        Approved         |  Pass  |   -   |
| [P2P0800](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0800.yml) | <ul><li>P2P Transfer</li> <li>Account Lookup: Yes</li> <li> AmountType: Send </li><li> Fees: Disclosing</li></ul>        |        Approved         |  Pass  |   -   |
| [P2P5001](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P5001.yml) | <ul><li>P2P Transfer</li> <li>Account Lookup: No</li> <li> AmountType: Receive </li><li> Fees: Non-Disclosing</li></ul>  | Quote Rejected by Payee |  Fail  | 5103  |
| [P2P5002](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P5002.yml) | <ul><li>P2P Transfer</li> <li>Account Lookup: No</li> <li> AmountType: Send </li><li> Fees: Non-Disclosing</li></ul>     | Quote Rejected by Payee |  Fail  | 5103  |
| [P2P5003](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P5003.yml) | <ul><li>P2P Transfer</li> <li>Account Lookup: No</li> <li> AmountType: Receive </li><li> Fees: Disclosing</li></ul>      | Quote Rejected by Payee |  Fail  | 5103  |
| [P2P5004](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P5004.yml) | <ul><li>P2P Transfer</li> <li>Account Lookup: No</li> <li> AmountType: Send </li><li> Fees: Disclosing</li></ul>         | Quote Rejected by Payee |  Fail  | 5103  |

### International Remittance <a name="ir"></a>

:::note Under development

:::
