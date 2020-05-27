---
id: tclist
title: ITP Test Case List
sidebar_label: Test Cases List
---

## Table of Contents

1. [ITP Test Cases](#what)
2. [List of Test Cases](#tc)
   1. [Merchant-Initiated Merchant Payment](#mimp)
   2. [Payer-Initiated Merchant Payment](#pimp)
   3. [Peer-2-Peer](#p2p)
   4. [International Remmittance](#ir)

## ITP Test Cases <a name="what"></a>

All test cases currently available on the ITP platform are listed below. As new test cases are created, the documentation, and therefore the list, is updated. The list of test cases is divided by use case and contains the following attributes:

**Test Case Code:** Code that identifies the test case in relation to the others. The TC code contains the acronym. The code consists of two parts: an acronym that is directly related to the use case, and a code that differentiates tests for the test group to which it belongs (e.g. P2P0057 is the test case 0057 for the use case P2P).

**Test Case Scenario:** This field is made up of properties that define the scenario in which the test case is being executed. Through these properties we can obtain specific information necessary for a better characterization of the transaction, such as: involved fees and commissions, use of account lookup system, provider supported currencies, etc.

**Results:** The results field indicates the expected behavior for test cases under validation. Such behavior is related to the transaction being approved or not. When dealing with a not approved transaction, the value of this attribute allows a better understanding of the reason for not carrying out the transaction.

**Status:** Expected results after running the test case. The result indicates whether the evaluated path is a happy flow or unhappy flow.

**Error Number:** Indicates the number of the current error for the test case. Through this number it is possible to know which category the error belongs to in relation to the API to which it is related (e.g. 3208 - Transfer ID not found).

## List of Teste Cases <a name="tc"></a>

### Merchant-Initiated Merchant Payment <a name="mimp"></a>

### Payer-Initiated Merchant Payment <a name="pimp"></a>

### Use Case: Peer-2-Peer <a name="p2p"></a>


| Teste Case | Test Scenario | Results | Status | Error|
|------------|---------------|---------|--------|-----:|
|P2P0100|P2P transference ALS:NO / Fee: Non-Disclosing / AmountType: Receive|Aproved|Pass|-|
|P2P0110|P2P transference ALS:NO / Fee: Non-Disclosing / AmountType: Receive|Rejected Quote|Fail|5103|
|P2P0140|P2P transference ALS:NO / Fee: Non-Disclosing / AmountType: Receive|Rejected|Fail|400|
|P2P0141|P2P transference ALS:NO / Fee: Non-Disclosing / AmountType: Receive|Rejected|Fail|401|
|P2P0144|P2P transference ALS:NO / Fee: Non-Disclosing / AmountType: Receive|Rejected|Fail|450|
|P2P0150|P2P transference ALS:NO / Fee: Non-Disclosing / AmountType: Receive|Aproved|Fail|150|
|P2P0200|P2P transference ALS:NO / Fee: Non-Disclosing / AmountType: Send|Aproved|Pass|-|
|P2P0210|P2P transference ALS:NO / Fee: Non-Disclosing / AmountType: Send|Rejected Quote|Fail|5103|
|P2P0240|P2P transference ALS:NO / Fee: Non-Disclosing / AmountType: Send|Rejected|Fail|400|
|P2P0241|P2P transference ALS:NO / Fee: Non-Disclosing / AmountType: Send|Rejected|Fail|401|
|P2P0244|P2P transference ALS:NO / Fee: Non-Disclosing / AmountType: Send|Rejected|Fail|404|
|P2P0250|P2P transference ALS:NO / Fee: Non-Disclosing / AmountType: Send|Rejected|Fail|500|
|P2P0300|P2P transference ALS:NO / Fee: Disclosing / AmountType: Receive|Aproved|Pass|-|
|P2P0310|P2P transference ALS:NO / Fee: Disclosing / AmountType: Receive|Rejected Quote|Fail|5103|
|P2P0340|P2P transference ALS:NO / Fee: Disclosing / AmountType: Receive|Rejected|Fail|400|
|P2P0341|P2P transference ALS:NO / Fee: Disclosing / AmountType: Receive|Rejected|Fail|401|
|P2P0344|P2P transference ALS:NO / Fee: Disclosing / AmountType: Receive|Rejected|Fail|404|
|P2P0350|P2P transference ALS:NO / Fee: Disclosing / AmountType: Receive|Rejected|Fail|500|
|P2P0400|P2P transference ALS:NO / Fee: Disclosing / AmountType: Send|Aproved|Pass|-|
|P2P0410|P2P transference ALS:NO / Fee: Disclosing / AmountType: Send|Rejected Quote|Fail|5103|
|P2P0440|P2P transference ALS:NO / Fee: Disclosing / AmountType: Send|Rejected|Fail|400|
|P2P0441|P2P transference ALS:NO / Fee: Disclosing / AmountType: Send|Rejected|Fail|401|
|P2P0444|P2P transference ALS:NO / Fee: Disclosing / AmountType: Send|Rejected|Fail|404|
|P2P0450|P2P transference ALS:NO / Fee: Disclosing / AmountType: Send|Rejected|Fail|500|
|P2P0500|P2P transference ALS:YES / Fee: Non-Disclosing / AmountType: Receive|Aproved|Pass|-|

#### International Remmittance <a name="ir"></a>
