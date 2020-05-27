---
id: usecases
title: Guide for ITP Use Cases
sidebar_label: Use Cases Guide
---

### ITP Use Cases <a name="what"></a>

The **ITP Use Cases** are used to capture the system requirements documenting the action of external actors <sup>[1](#myfootnote1)</sup> interacting with a system to achieve a specific goal. They map the business and user requisites to demonstrate precisely what to expect from the system. A Use Case (UC) makes possible the understanding of all possible paths through a given user/system interaction. Theses paths include both basic and alternative flows. The basic path (also called happy flow) is the main one and comply with all user needs. Alternative paths include several other situations that are related to the use case, even if they are not frequent or desired (unhappy flow), such as errors for example. Through this documentation  it is possible to understand more about the use cases and see all the use cases available in the Interoperability Test Platform. Also, it is possible to understand what types of requirements are related to the UC and the different paths under test by the platform. In way to a better understanding about the behaviour of the different use cases paths, please see the guide for ITP test cases.

### What an ITP Use Case represents

The use cases represents the Mobile Money transactions types available for testing in the platform. Each use case is composed by a set of elements which are used to represent the type of use case. These elements are: the **scenario** where the UC refers to, the **initiator party** of the transaction, and the **type**, containing the classification of the initiator part. In addition to the set of elements mentioned, each transaction consists of one or more actions defined by the services available in the APIs. The transaction elements and transaction actions are detailed below.

### Transaction Elements

**Transaction Scenarios:** A Transaction Scenario represents one of the several ways of using mobile money and is directly related to the objective that the use case validates.

**Initiator Party:** The Initiator Party specifies the actor<sup>[1](#myfootnote1)</sup> who initiate the transaction.

**Initiator Type:** The start of the transaction can occur from different sources that are defined by Initiator Type. This source also determines the types of transactions that can occur.

|Transaction Scenarios|Initiator Party|Initiator Type|
|:-------------------:|:-------------:|:------------:|
|Transfer|Payer|Consumer|
|Deposit|Payee|Business|
|Withdrar|Service Provider|Device|
|Payment|Mobile Money Operator|Agent|
|Refund| - | - |

### Transaction Actions

|Transacrtion Action|Description|
|:-------------------|:-------------|
|Participant|Information related to the FSP participant location|
|Party|Financial information about a party in a transaction|
|Quote|Calculation of all values that can influence a transaction, such as fees and commissions|
|Transfer|Performs the transfer of funds from Payer to Payee|
|Authorization|Requires the necessary credentials to carry out a transaction on devices such as POS, ATM, etc|
|Transaction Request|Payee requires the transfer of funds by Payer who can approve or reject the request|
|Transaction Information|Obtains information regarding a financial transaction|


<a name="myfootnote1">1 </a>: Actors are usually considered as humans and/or external systems.