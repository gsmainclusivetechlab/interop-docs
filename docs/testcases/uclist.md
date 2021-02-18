---
title: List of ITP Use Cases
sidebar_label: List of Use Cases
---

The Use Case (UC) code identifies the use case in relation to the others. The
code contains the acronym UC and a reference code (e.g. UC19). All use cases
currently available on the ITP platform and those under development are listed
below.

## UC01 - Merchant-Initiated Merchant Payment <a name="mimp"></a>

This use case describes the process in which a user (payer) purchases a service
or goods from a merchant. The transaction is initiated by the merchant and needs
to be validated by the user (payer).

:::note User Story

Didier walks into a store to purchase a modem for his home.

After giving his information to the merchant, the merchant generates a
transaction request which gets processed through the system. Didier is notified
of the request by his FSP, and approves the payment. After approval, both
parties receive a confirmation of payment from their respective FSPs.

:::

|                         Use Case Name: | Merchant-Initiated Merchant Payment                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                               Summary: | This use case simulates a scenario where the payer would like to purchase goods or services from a merchant but they are each using different wallet providers.                                                                                                                                                                                                                                            |
|                                Actors: | <ul><li>Payer FSP</li><li>Payee FSP</li><li>Service Provider</li><li>Switch</li></ul>                                                                                                                                                                                                                                                                                                                      |
|                         Preconditions: | <ul><li> Service Provider has GSMA Mobile Money API Implemented. </li><li> Service Provider is capable of handling async calls.</li><li> Payee and Payer MMOs exist in Mojaloop as Participants.</li> <li> Payee and Payer exist in Mojaloop as Parties. </li></ul>                                                                                                                                        |
|                           Description: | <ol><li> Payer wants to buy goods/services from a merchant. </li><li> Merchant sends a transaction request to their FSP (Payee FSP). </li><li> The Payee FSP then sends this request to the Payer FSP via the Switch </li><li> Payer FSP sends a quote back to Payee FSP for conformation </li><li> After conformation, the transfer is sent from the Payer FSP to the Payee FSP via the Switch </li></ol> |
| Exceptions<sup>[1](#exceptions)</sup>: | Rejected Transaction by Payer FSP, Rejected Transaction Request by Payer FSP, Rejected Quote by Payee FSP, Declined Transaction by Payee FSP                                                                                                                                                                                                                                                               |
|                        Postconditions: | Transaction Request: <ul><li>Accepted</li><li>Rejected</li></ul> Quote: <ul><li>Accepted</li><li>Expired</li><li>Rejected</li></ul> Transfer: <ul><li>Committed</li><li>Aborted</li></ul>                                                                                                                                                                                                                  |

The sequence diagram below shows the typical flow for an authorized transaction:

![Merchant Use Case Flow](/img/ucmp.svg)

## UC02 - Customer-Initiated Merchant Payment <a name="cimp"></a>

:::note Under development

This section is still under development.

:::

## UC03 - Peer-to-Peer <a name="p2p"></a>

This use case describes the process involved when a user (payer) needs to carry
out a transaction to send money to another user (payee) who has a different
financial service provider.

:::note User Story

Zuri needs to transfer money to her brother who lives in another city through
her mobile money service provider. Both have phones but have different financial
service providers. After entering her brother's information, or using previously
saved information, she starts the transfer process. Zuri can see all fees
(including exchange rates, if any) and decides to proceed with the transfer. A
few seconds later, Zuri receives confirmation of the transaction and her brother
receives the money in his mobile money account.

:::

|                         Use Case Name: | Peer to Peer                                                                                                                                                                                                                                                                                                                                                   |
| -------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                               Summary: | This use case simulates a scenario where the Payer would like to send money to a Payee but each of them is using different wallet providers                                                                                                                                                                                                                    |
|                                Actors: | <ul><li>Payer</li><li>Payee</li><li>Payer FSP</li><li>Payee FSP</li><li>Mobile Money Operator</li><li>Switch</li></ul>                                                                                                                                                                                                                                         |
|                         Preconditions: | <ul><li>The user has permission to use P2P transfer</li><li>FSPs are capable of handling async calls.</li><li>Payer FSP and Payee FSP exist in Mojaloop as Participants.</li><li>Payee and Payer exist in Switch as Parties.</li></ul>                                                                                                                         |
|                           Description: | <ol><li>Payer shows interest in making a transfer;</li><li>Payer FSP performs the transfer quote via switch to Payee FSP;</li><li>After receiving the quote with fees and commissions, Payer decides to proceed with the transfer;</li><li>Payer FSP transfers to Payee FSP via Switch;</li><li>Payee FSP notifies Payee of receipt of the transfer.</li></ol> |
| Exceptions<sup>[1](#exceptions)</sup>: | Payee FSP Rejected Quote, Payee Rejected Quote                                                                                                                                                                                                                                                                                                                 |
|                        Postconditions: | Quotes:<ul><li>Accepted</li><li>Expired</li><li>Rejected</li></ul>Transfer:<ul><li>Committed</li><li>Aborted</li></ul>                                                                                                                                                                                                                                         |

Sequence diagram for one of the basic paths (happy flow) for P2P:
![P2P Use Case Flow](/img/ucp2p.svg)

## UC04 - International Remittance <a name="ir"></a>

:::note Under development

This section is still under development.

:::

---

##### Footnotes

- <a name="exceptions">1 </a>: The exceptions listed are directly related to
  alternative paths the use case can take. Using the exceptions, it is possible
  to derive the unhappy flows covered by the appropriate test cases.
