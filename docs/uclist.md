---
id: uclist
title: ITP Use Cases List
sidebar_label: Use Cases List
---

### List of Use Cases <a name="uc"></a>

1. UC0100 - [Merchant-Initiated Merchant Payment](#mimp)
2. UC0200 - [Payer-Initiated Merchant Payment](#pimp)
3. UC0300 - [P2P Transfer](#p2p)
4. UC0400 - [International Remmitance](#ir)

### Use Cases Description <a name="ucdescription"></a>

The UC code identifies the use case in relation to the others. The code contains the acronym UC and a reference code (e.g. UC019). All use cases currently available on the ITP platform are listed below.

#### UC0100 - Merchant-Initiated Merchant Payment <a name="mimp"></a>

|Use Case Name:| Merchant-Initiated Merchant Payment |
|-:|:-|
|Sumary:| insert text |
|Actors:| insert text |
|Preconditions:| insert text |
|Description:| insert text |
|Exceptions:| insert text |
|Postconditions:| insert text |

#### UC0200 - Payer-Initiated Merchant Payment <a name="pimp"></a>

|Use Case Name:| Payer-Initiated Merchant Payment |
|-:|:-|
|Sumary:| insert text |
|Actors:| insert text |
|Preconditions:| insert text |
|Description:| insert text |
|Exceptions:| insert text |
|Postconditions:| insert text |

#### UC0300 - Peer-2-Peer <a name="p2p"></a>

|Use Case Name:| Peer-2-Peer |
|-:|:-|
|Sumary:| This testcase simulates a scenario where the Payer would like to send money to a Payee but each of them uses different providers|
|Actors:|<ul><li>Payer</li><li>Payee</li><li>Payer FSP</li><li>Payee FSP</li><li>Mobile Money Operator</li><li>Switch</li></ul>|
|Preconditions:| <ul><li>The user has permission to use P2P transer</li><li>FSPs are capable of handled async calls.</li><li>Payer FSP and Payee FSP exist in Mojaloop as Participants.</li><li>Payee and Payer exist in Switch as Parties.</li></ul> |
|Description:| <ol><li>Payer shows interest in making a transfer;</li><li>Payer FSP performs the transfer quote via switch to Payee FSP;</li><li>After receiving the quote with fees and commissions, Payer decides to proceed with the transfer;</li><li>Payer FSP transfers to Payee FSP via Switch;</li><li>Payee FSP notifies Payee of receipt of the transfer.</li></ol> |
|Exceptions:|<ul><li>Quote Rejected</li><li>Syntax Error</li><li>Element Missing</li><li>Too Many Elements</li><li>Invalid Signature</li><li>Generic Errors</li><li>INSERT MORE</li></ul> |
|Postconditions:|Quotes:<ul><li>Accepted</li><li>Expired</li><li>Rejected</li></ul>Transfer:<ul><li>Committed</li><li>Aborted</li></ul>|

Here's our logo (hover to see the title text):

Inline-style: ![alt text](https://github.com/gsmainclusivetechlab/interop-docs/tree/gh-pages/img/p2p-rnd.png 'Logo Title Text 1')

#### UC0400 - International Remmittance <a name="ir"></a>

|Use Case Name:| International Remmitance |
|-:|:-|
|Sumary:| insert text |
|Actors:| insert text |
|Preconditions:| insert text |
|Description:| insert text |
|Exceptions:| insert text |
|Postconditions:| insert text |
