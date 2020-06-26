---
id: intro
title: Guide for ITP Test Cases
sidebar_label: Test Cases Guide
---

### 1. ITP Test Cases

ITP Test Cases approach all diferent paths related to a specific use case to
validade if the requirements are met. In way to assure the quality of a system,
the test cases are separated into happy and unhappy so that they cover all the
existing possibilities for a use case. Tests typically include several
alternative paths that evaluate the exceptions and errors in the use case. It is
also possible that there are several happy paths, addressing different business
rules that allow to obtain the expected result.

### 2. List of Teste Cases

#### Merchant-Initiated Merchant Payment

#### Customer-Initiated Merchant Payment

:::note Under development :::

#### Use Case: Peer-2-Peer

P2P use cases may involve different types of scenarios depending on the amount
type, the fees involved and if the FSP needs to get a participant location from
an Account Lookup System (ALS).

There are two types of amount type in a P2P transaction. **SEND**: In this type
of amount, the payer defines that the total amount he/she is paying and all fees
must to be taken from this amount. **RECEIVE**: In this type, the payer defines
the total amount the payee must to receive. Thus, the fees involved in the
transaction may increase the final amount the payer has to send.

In relation to the fees/comissions information the transaction can be
**Non-Disclosing**, when the PayerFSP does not informes the PayeeFSP about the
fees and comission involved in the transaction or **Disclosing** when it does.

#### Use Case: International Remmittance

:::note Under development :::
