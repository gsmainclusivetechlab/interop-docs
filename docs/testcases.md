---
id: testcases
title: Guide for ITP Test Cases
sidebar_label: Test Cases
---

### 1. ITP Test Cases

ITP Test Cases approach all diferent paths related to a specific use case to validade if the requirements are met. In way to assure the quality of a system, the test cases are separated into happy and unhappy so that they cover all the existing possibilities for a use case. Tests typically include several alternative paths that evaluate the exceptions and errors in the use case. It is also possible that there are several happy paths, addressing different business rules that allow to obtain the expected result.

### 2. List of Teste Cases

#### Use Case: Merchant Payment <a name="mp"></a>

##### Merchant-Initiated Merchant Payment <a name="mimp"></a>

##### Payer-Initiated Merchant Payment <a name="pimp"></a>

#### Use Case: P2P transference <a name="p2p"></a>

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

#### Use Case: P2P TESTE <a name="teste"></a>
