---
id: uclist
title: ITP Use Cases List
sidebar_label: Use Cases List
---

## List of Use Cases <a name="uc"></a>

1. UC01 - [Merchant-Initiated Merchant Payment](#mimp)
2. UC02 - [Customer-Initiated Merchant Payment](#cimp)
3. UC03 - [P2P Transfer](#p2p)
4. UC04 - [International Remmitance](#ir)

## Use Cases Description <a name="ucdescription"></a>

The UC code identifies the use case in relation to the others. The code contains the acronym UC and a reference code (e.g. UC19). All use cases currently available on the ITP platform and those under development are listed below.

### UC01 - Merchant-Initiated Merchant Payment <a name="mimp"></a>

This use case describes the process in which a user (payer) purchases a service or goods from a merchant. The transaction is initiated by the merchant and needs to be validated by the user (payer). The user story below details how this use case could be executed:

:::note User Story
Didier walks into a store to purchase a modem for his home. After giving his information to the merchant, the latter generates a transaction request which gets processed through the system. Didier proceeds with the payment and both parties get a confirmation of payment.
:::

|Use Case Name:| Merchant-Initiated Merchant Payment |
|-:|:-|
|Summary:| This use case simulates a scenario where the payer would like to purchase goods or services from a merchant but they are each using different wallet providers. |
|Actors:| <ul><li>Payer FSP</li><li>Payee FSP</li><li>Service Provider</li><li>Switch</li></ul>|
|Preconditions:| <ul><li> Service Provider has GSMA Mobile Money API Implemented. </li><li> Service Provider is capable of handled async calls.</li><li> Payee and Payer MMOs exist in Mojaloop as Participants.</li> <li> Payee and Payer exist in Mojaloop as Parties. </li></ul> |
|Description:| <ol><li> Payer wants to buy goods/services from a merchant. </li><li> Merchant sends a transaction request to their FSP (Payee FSP). </li><li> The Payee FSP then sends this request to the Payer FSP via the Switch </li><li> Payer FSP sends a quote back to Payee FSP for conformation </li><li> After conformation, the transfer is sent from the Payer FSP to the Payee FSP via the Switch </li></ol> |
|Exceptions<sup>[1](#exceptions)</sup>:|  Rejected Transaction by Payer FSP, Rejected Transaction Request by Payer FSP, Rejected Quote by Payee FSP, Decline Transaction by Payee FSP |
|Postconditions:| Transaction Request: <ul><li>Accepted</li><li>Rejected</li></ul> Quote: <ul><li>Accepted</li><li>Expired</li><li>Rejected</li></ul> Transfer: <ul><li>Commited</li><li>Aborted</li></ul>|

The sequence diagram below shows the typical flow for an authorized transaction:

![Merchant Use Case Flow](/img/ucmp.svg)

### UC02 - Customer-Initiated Merchant Payment <a name="cimp"></a>

:::note
Under development
:::

### UC03 - Peer-2-Peer <a name="p2p"></a>

This use case describes the process involved when a user (payer) needs to carry out a transaction to send money to another user (payee) and who are at different service providers. The following is a user story describing an example of how the user would behave to perform a P2P transfer.

:::note User Story
Zuri needs to transfer money to his brother who lives in another city through his mobile money service provider. Both have phones but are at different service providers. After entering her brother's information, or using previously saved information, she starts the transfer process. Zuri has access to full rates (including exchange rates, if any) and decides to proceed with the transfer. A few seconds later, Zuri receives confirmation of the transaction and her brother receives the money in his mobile money account.
:::

|Use Case Name:| Peer-2-Peer |
|-:|:-|
|Summary:| This use case simulates a scenario where the Payer would like to send money to a Payee but each of them is using different wallet providers|
|Actors:|<ul><li>Payer</li><li>Payee</li><li>Payer FSP</li><li>Payee FSP</li><li>Mobile Money Operator</li><li>Switch</li></ul>|
|Preconditions:| <ul><li>The user has permission to use P2P transer</li><li>FSPs are capable of handled async calls.</li><li>Payer FSP and Payee FSP exist in Mojaloop as Participants.</li><li>Payee and Payer exist in Switch as Parties.</li></ul> |
|Description:| <ol><li>Payer shows interest in making a transfer;</li><li>Payer FSP performs the transfer quote via switch to Payee FSP;</li><li>After receiving the quote with fees and commissions, Payer decides to proceed with the transfer;</li><li>Payer FSP transfers to Payee FSP via Switch;</li><li>Payee FSP notifies Payee of receipt of the transfer.</li></ol> |
|Exceptions<sup>[1](#exceptions)</sup>:| Payee FSP Rejected Quote, Payee Rejected Quote|
|Postconditions:|Quotes:<ul><li>Accepted</li><li>Expired</li><li>Rejected</li></ul>Transfer:<ul><li>Committed</li><li>Aborted</li></ul>|

Sequence diagram for one of the basic paths (happy flow) for P2P:
![P2P Use Case Flow](/img/ucp2p.svg)

### UC04 - International Remmittance <a name="ir"></a>

:::note
Under development
:::

---

##### Footnotes

- <a name="exceptions">1 </a>: The exceptions are directed related to the alternative paths the use case can take. This way it is possible to to realize by this parameter the unhappy flows approached in the test cases.
