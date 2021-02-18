---
title: ITP Use Cases
sidebar_label: Introduction
---

### What is a Use Case?

Within the interoperability test platform (ITP), "_Use Cases_" (UC) represent
the different goals that actors within the system may have. For example, a
peer-to-peer (P2P) transfer of money would constitute a use case, as would
payment to a merchant for some service. Use cases capture the business and user
requirements to demonstrate precisely what to expect from the system. A use case
includes all possible paths through a given user/system interaction - both the
primary and alternative flows.

The primary path (also called _happy flow_) is the main flow to be tested, where
it is possible to satisfy all user needs. Alternative paths include several
other situations that are related to the use case, even if they are not desired,
or less frequent. These alternative flows often include errors, and are also
called _unhappy flows_. Each of these flows is represented by a "Test Case"
within the platform.

This section of the documentation includes more information about use cases in
general, and about the use cases which the GSMA have made available to test
within the Interoperability Test Platform. To see more about the different paths
available to test within each use case, please see the list of available
[test cases](./tclist).

### Transaction Elements

The use cases represent the different kinds of Mobile Money transactions
available for testing in the platform. Each use case is composed of a set of
transaction elements which are used to define its main characteristics. These
elements are:

**Transaction Scenarios:** A Transaction Scenario represents one of the several
ways of using mobile money and is directly related to the objective that the use
case validates.

**Initiating Party:** The Initiating Party specifies the actor who initiated the
transaction.

**Initiator Type:** The start of the transaction can occur from different
sources that are defined by Initiator Type. This source also limits the types of
transactions that can occur.

| Transaction Scenarios |   Initiating Party    | Initiator Type |
| :-------------------: | :-------------------: | :------------: |
|       Transfer        |         Payer         |    Consumer    |
|        Deposit        |         Payee         |    Business    |
|      Withdrawal       |   Service Provider    |     Device     |
|        Payment        | Mobile Money Operator |     Agent      |
|        Refund         |           -           |       -        |

These elements can be combined in different ways to define the use case under
evaluation. For example, in a merchant-initiated merchant payment transaction we
the Transaction Scenario would be "_payment_", the Initiating Party would be
"_payee_" and the Initiator Type would be "_business_. If the transaction was
initiated by a POS, the type would change to "_device_".

### Transaction Actions

In addition to the set of **transaction elements** mentioned earlier, each
transaction consists of one or more **actions** defined by the services
available in the APIs.

| Transaction Action      | Description                                                                                  |
| :---------------------- | :------------------------------------------------------------------------------------------- |
| Participant             | Retrieve information related to the FSP representing the participant                         |
| Party                   | Retrieve financial information about a party in a transaction                                |
| Quote                   | Calculate all values that can influence a transaction, such as fees and commissions          |
| Transfer                | Performs the transfer of funds from Payer to Payee                                           |
| Authorization           | Obtain the necessary credentials to carry out a transaction on devices such as POS, ATM, etc |
| Transaction Request     | Request the transfer of funds by Payer who can approve or reject the request                 |
| Transaction Information | Obtain information regarding a financial transaction                                         |
