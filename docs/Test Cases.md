---
id: testcases
title: Guide for Test Case Scenarios
sidebar_label: Test Cases
---

## Table of Contents

1. [ITP Test Cases](#what)
2. [List of Test Cases](#tc)
   1. [Use Case: Merchant Payment](#mp)
   2. [Merchant-Initiated Merchant Payment](#mimp)
   3. [Payer-Initiated Merchant Payment](#pimp)
   4. [Peer-2-Peer](#p2p)
3. teste

### ITP Test Cases <a name="what"></a>

Write some introduction for this documentation

### List of Teste Cases <a name="tc"></a>

#### Use Case: Merchant Payment <a name="mp"></a>

##### Merchant-Initiated Merchant Payment <a name="mimp"></a>

##### Payer-Initiated Merchant Payment <a name="pimp"></a>

#### Use Case: P2P transference <a name="p2p"></a>

P2P use cases may involve different types of scenarios depending on the amount type, the fees involved and if the FSP needs to get a participant location from an Account Lookup System (ALS).

There are two types of amount type in a P2P transaction. **SEND**: In this type of amount, the payer defines that the total amount he/she is paying and all fees must to be taken from this amount. **RECEIVE**: In this type, the payer defines the total amount the payee must to receive. Thus, the fees involved in the transaction may increase the final amount the payer has to send.

In relation to the fees/comissions information the transaction can be **Non-Disclosing**, when the PayerFSP does not informes the PayeeFSP about the fees and comission involved in the transaction or **Disclosing** when it does.

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

#### Use Case: P2P TESTE <a name="teste"></a>
