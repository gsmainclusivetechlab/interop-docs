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

The UC code identifies the use case in relation to the others. The code contains the acronym UC and a reference code (e.g. UC019). All use cases currently available on the ITP platform are listed below.

### UC01 - Merchant-Initiated Merchant Payment <a name="mimp"></a>

|Use Case Name:| Merchant-Initiated Merchant Payment |
|-:|:-|
|Sumary:| insert text |
|Actors:| insert text |
|Preconditions:| insert text |
|Description:| insert text |
|Exceptions<sup>[1](#exceptions)</sup>:| insert text |
|Postconditions:| insert text |

### UC02 - Customer-Initiated Merchant Payment <a name="cimp"></a>

:::note
Under development
:::

### UC03 - Peer-2-Peer <a name="p2p"></a>

This use case describes the process involved when a user (payer) needs to carry out a transaction to send money to another user (payee) and who are at different service providers. The following is a brief story describing an example of how the user would behave to perform a P2P transfer.

:::note User Story
Zuri needs to transfer money to his brother who lives in another city through his mobile money service provider. Both have phones but are at different service providers. After entering her brother's information, or using previously saved information, she starts the transfer process. Zuri has access to full rates (including exchange rates, if any) and decides to proceed with the transfer. A few seconds later Zuri receives confirmation of the transaction and her brother receives the money in his mobile money account.
:::

|Use Case Name:| Peer-2-Peer |
|-:|:-|
|Sumary:| This testcase simulates a scenario where the Payer would like to send money to a Payee but each of them uses different providers|
|Actors:|<ul><li>Payer</li><li>Payee</li><li>Payer FSP</li><li>Payee FSP</li><li>Mobile Money Operator</li><li>Switch</li></ul>|
|Preconditions:| <ul><li>The user has permission to use P2P transer</li><li>FSPs are capable of handled async calls.</li><li>Payer FSP and Payee FSP exist in Mojaloop as Participants.</li><li>Payee and Payer exist in Switch as Parties.</li></ul> |
|Description:| <ol><li>Payer shows interest in making a transfer;</li><li>Payer FSP performs the transfer quote via switch to Payee FSP;</li><li>After receiving the quote with fees and commissions, Payer decides to proceed with the transfer;</li><li>Payer FSP transfers to Payee FSP via Switch;</li><li>Payee FSP notifies Payee of receipt of the transfer.</li></ol> |
|Exceptions<sup>[1](#exceptions)</sup>:| Payee FSP Rejected Quote, Payee Rejected Quote|
|Postconditions:|Quotes:<ul><li>Accepted</li><li>Expired</li><li>Rejected</li></ul>Transfer:<ul><li>Committed</li><li>Aborted</li></ul>|

Sequence diagram for one of the basic paths (happy flow) for P2P: (This picture will be changed to the template Bruno shared)

![P2P Use Case Flow](/interop-docs/img/p2p-rnd.png)

### UC04 - International Remmittance <a name="ir"></a>

:::note
Under development
:::

---

##### Footnotes

- <a name="exceptions">1 </a>: The exceptions are directed related to the alternative paths the use case can take. This way it is possible to to realize by this parameter the unhappy flows approached in the test cases.
