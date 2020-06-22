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

## List of Test Cases <a name="tc"></a>

### Merchant-Initiated Merchant Payment <a name="mimp"></a>

| Test Case | Test Scenario | Results | Status | Error|
|:----------:|---------------|:-------:|:------:|:----:|
|[MC0100](files/tc/mc/MC0100.yml)|Authorized Transaction|Approved|Pass|-|
|[MC0200](files/tc/mc/MC0200.yml)|Authorized Transaction w/ Account Lookup|Approved|Pass|-|
|[MC0300](files/tc/mc/MC0300.yml)|Authorized Transaction w/ Authorisation Codes|Approved|Pass|-|
|[MC0400](files/tc/mc/MC0400.yml)|Declined Transacation|Declined|Fail|400|
|[MC0500](files/tc/mc/MC0500.yml)|Declined Transacation|Declined|Fail|401|
|[MC0600](files/tc/mc/MC0600.yml)|Declined Transacation|Declined|Fail|404|
|[MC0700](files/tc/mc/MC0700.yml)|Declined Transacation|Declined|Fail|500|
|[MC0800](files/tc/mc/MC0800.yml)|Declined Transacation|Declined|Fail|503|
|[MC5001](files/tc/mc/MC5001.yml)|Rejected Quote|Rejected Quote by Payee|Fail|5103|
|[MC5002](files/tc/mc/MC5102.yml)|Rejected Transaction|Rejected Transaction by Payer|Fail|5103|
|[MC5003](files/tc/mc/MC5003.yml)|Rejected Transaction Request|Rejected Transaction Request by Payer|Fail|5103|

### Customer-Initiated Merchant Payment <a name="cimp"></a>

:::note
Under development
:::

### Use Case: Peer-2-Peer <a name="p2p"></a>

| Test Case | Test Scenario | Results | Status | Error|
|:----------:|---------------|:-------:|:------:|:----:|
|[P2P0100](files/tc/p2p/P2P0100.yml)|P2P transference ALS:NO / AmountType: Receive / Fee: Non-Disclosing|Approved|Pass|-|
|[P2P0200](files/tc/p2p/P2P0200.yml)|P2P transference ALS:NO / AmountType: Send / Fee: Non-Disclosing|Approved|Pass|-|
|[P2P0300](files/tc/p2p/P2P0300.yml)|P2P transference ALS:NO / AmountType: Receive / Fee: Disclosing|Approved|Pass|-|
|[P2P0400](files/tc/p2p/P2P0400.yml)|P2P transference ALS:NO / AmountType: Send / Fee: Disclosing|Approved|Pass|-|
|[P2P0500](files/tc/p2p/P2P0500.yml)|P2P transference ALS:YES / AmountType: Receive / Fee: Non-Disclosing|Approved|Pass|-|
|[P2P0600](files/tc/p2p/P2P0600.yml)|P2P transference ALS:YES / AmountType: Send / Fee: Non-Disclosing|Approved|Pass|-|
|[P2P0700](files/tc/p2p/P2P0700.yml)|P2P transference ALS:YES / AmountType: Receive / Fee: Disclosing|Approved|Pass|-|
|[P2P0800](files/tc/p2p/P2P0800.yml)|P2P transference ALS:YES / AmountType: Send / Fee: Disclosing|Approved|Pass|-|
|[P2P5001](files/tc/p2p/P2P5001.yml)|P2P transference ALS:NO / AmountType: Receive / Fee: Non-Disclosing|Rejected Quote by Payee|Fail|5103|
|[P2P5002](files/tc/p2p/P2P5002.yml)|P2P transference ALS:NO / AmountType: Send / Fee: Non-Disclosing|Rejected Quote by Payee|Fail|5103|
|[P2P5003](files/tc/p2p/P2P5003.yml)|P2P transference ALS:NO / AmountType: Receive / Fee: Disclosing|Rejected Quote by Payee|Fail|5103|
|[P2P5004](files/tc/p2p/P2P5004.yml)|P2P transference ALS:NO / AmountType: Send / Fee: Disclosing|Rejected Quote by Payee|Fail|5103|

### International Remmittance <a name="ir"></a>

:::note
Under development
:::
