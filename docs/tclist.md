---
id: tclist
title: ITP Test Case List
sidebar_label: Test Cases List
---

## Table of Contents

1. [ITP Test Cases](#what)
2. [List of Test Cases](#tc)
   1. [Merchant-Initiated Merchant Payment](#mimp)
   2. [Customer-Initiated Merchant Payment](#cimp)
   3. [Peer-2-Peer](#p2p)
   4. [International Remmittance](#ir)

## ITP Test Cases <a name="what"></a>

ITP Test Cases approach all diferent paths related to a specific use case to validade if the requirements are met. In way to assure the quality of a system, the test cases are separated into happy and unhappy so that they cover all the existing possibilities for a use case. Tests typically include several alternative paths that evaluate the exceptions and errors in the use case. It is also possible that there are several happy paths, addressing different business rules that allow to obtain the expected result.

All test cases currently available on the ITP platform are listed below. As new test cases are created, the documentation, and therefore the list, is updated. The list of test cases is divided by use case and contains the following attributes:

**Test Case Code:** Code that identifies the test case in relation to the others. The TC code contains the acronym. The code consists of two parts: an acronym that is directly related to the use case, and a code that differentiates tests for the test group to which it belongs (e.g. P2P0057 is the test case 0057 for the use case P2P).

**Test Case Scenario:** This field is made up of properties that define the scenario in which the test case is being executed. Through these properties we can obtain specific information necessary for a better characterization of the transaction, such as: involved fees and commissions, use of account lookup system, provider supported currencies, etc.

**Results:** The results field indicates the expected behavior for test cases under validation. Such behavior is related to the transaction being approved or not. When dealing with a not approved transaction, the value of this attribute allows a better understanding of the reason for not carrying out the transaction.

**Status:** Expected results after running the test case. The result indicates whether the evaluated path is a happy flow or unhappy flow.

**Error Number:** Indicates the number of the current error for the test case. Through this number it is possible to know which category the error belongs to in relation to the API to which it is related (e.g. 3208 - Transfer ID not found).

## List of Teste Cases <a name="tc"></a>

### Merchant-Initiated Merchant Payment <a name="mimp"></a>

### Customer-Initiated Merchant Payment <a name="cimp"></a>

:::note
Under development
:::

### Use Case: Peer-2-Peer <a name="p2p"></a>

| Teste Case | Test Scenario | Results | Status | Error|
|:----------:|---------------|:-------:|:------:|:----:|
|[P2P0100](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0100.yml)|P2P transference ALS:NO / AmountType: Receive / Fee: Non-Disclosing|Aproved|Pass|-|
|[P2P0200](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0200.yml)|P2P transference ALS:NO / AmountType: Send / Fee: Non-Disclosing|Aproved|Pass|-|
|[P2P0300](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0300.yml)|P2P transference ALS:NO / AmountType: Receive / Fee: Disclosing|Aproved|Pass|-|
|[P2P0400](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0400.yml)|P2P transference ALS:NO / AmountType: Send / Fee: Disclosing|Aproved|Pass|-|
|[P2P0500](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0500.yml)|P2P transference ALS:YES / AmountType: Receive / Fee: Non-Disclosing|Aproved|Pass|-|
|[P2P0600](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0600.yml)|P2P transference ALS:YES / AmountType: Send / Fee: Non-Disclosing|Aproved|Pass|-|
|[P2P0700](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0700.yml)|P2P transference ALS:YES / AmountType: Receive / Fee: Disclosing|Aproved|Pass|-|
|[P2P0800](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0800.yml)|P2P transference ALS:YES / AmountType: Send / Fee: Disclosing|Aproved|Pass|-|
|[P2P5001](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P5001.yml)|P2P transference ALS:NO / AmountType: Receive / Fee: Non-Disclosing|Rejected Quote by Payee|Fail|5103|
|[P2P5002](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P5002.yml)|P2P transference ALS:NO / AmountType: Send / Fee: Non-Disclosing|Rejected Quote by Payee|Fail|5103|
|[P2P5003](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P5003.yml)|P2P transference ALS:NO / AmountType: Receive / Fee: Disclosing|Rejected Quote by Payee|Fail|5103|
|[P2P5004](https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P5004.yml)|P2P transference ALS:NO / AmountType: Send / Fee: Disclosing|Rejected Quote by Payee|Fail|5103|

### International Remmittance <a name="ir"></a>

:::note
Under development
:::
