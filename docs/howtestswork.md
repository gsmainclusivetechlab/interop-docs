--- 
id: howtestswork
title: How Tests Work with Components
sidebar_label: How Tests Work
---

This manual describes how the Test Control, Mojaloop and Simulators should be set up in order to work properly per working environment (e.g. Staging or Production) and contains examples of setups.

## Components

The platform includes four components used to test the Use Cases different paths. They are:

**Interoperability Test Platform**: intercepts messages between Components in order to show them on Portal side (and perform tests as well)

**SP Simulator**: represents Service Provider

**MMO1 simulator**: represents Payee’s FSP

**MMO2 simulator**: represents Payer’s FSP

**Mojaloop**: interoperability platform that connects MMO1 and MMO2 so that they can perform Use Cases (business operations like transfer funds in between MMOs)

## Connections between Components

In the real world in order to perform a Use Case the Payer’s MMO would connect directly to Mojaloop and ask to transfer funds to Payee’s MMO. However, the ITP system has to show all messages between Components to users. This goal can be reached if ITP somehow intercept messages.

Thus,
ITP should receive messages from Components
Component A need to think that it sending messages to Component B, but in the meantime, it should send message to ITP
The messages to be stored in ITP and send to Component-recipient

Possible scheme of it:
![Component Scheme](/interop-docs/img/itpconnections.png)

## Component identifiers

Apart from Test Case triggers and other options to identify the received message, the Test Control should somehow easily identify a sender and a recipient of the message. For this reason each component has its own uuid.
They are:

SP: 114511be-74e9-49d5-b93e-b4a461e01626

MMO1: e5f5e817-94d6-4a43-a7ec-f7274b6d85c2

Mojaloop: b2a85076-b748-4d93-8df1-2b39844e6d4b

MMO2: e602a859-a25f-4d37-9abe-0ac09fb734af

On having identifiers per component, the next stage for the Test Control is to define by uuids the sender and recipient of the message. Thus we should force simulators and SUTs to send uuids to Test Control. This is being done via URLs, that simulators and SUTs have inside, e.g. MMO1 communicates with SP and Mojaloo, so it should have inside URLs of both of them.

URL building specifics are a bit different for simulators and SUTs, so they will be described separately.

### Simulators

The simulators use traceparent as a unique id of the Test Run, so Test Control can easily identify the run, however, uuids + method (e.g. POST) + endpoint (e.g. /quotes) should help him to quickly find the step of the Test Case, rather than checking all steps one-by-one. For these reason URLs inside each simulator have the next structure:

http://{itp_url}/testing/{my_uuid}/{recipient_uuid}/simulator, where

{itp_url} is a URL of ITP,  
e.g. http://interop.gsmainclusivetechlab.io
testing is an identification for Test Control that this URL is related to Test Cases flow
{my_uuid} is uuid of this simulator 
e.g. for MMO1 e5f5e817-94d6-4a43-a7ec-f7274b6d85c2
{recipient_uuid} is a uuid of simulator that I send a message to
e.g. for Mojaloop b2a85076-b748-4d93-8df1-2b39844e6d4b
simulator is an identification for Test Control that this URL is related Simulator, so it includes a traceparent and its messages can be overridden

Thus, the URL of messages that MMO1 simulator will send to Mojaloop (through Test Control) on Production server will be:

http://interop.gsmainclusivetechlab.io/testing/e5f5e817-94d6-4a43-a7ec-f7274b6d85c2/b2a85076-b748-4d93-8df1-2b39844e6d4b/simulator

### SUTs
The SUTs may not support traceparent, so an additional layer of identification was created. They have a unique URLs for the nearest Components per Session + Test Control perform matching by triggers (test data, like “for Test Case #1 the amount field should be equal to ‘100’”).

The URL structure for SUTs a bit differs from the simulators' one:

http://{itp_url}/testing/{session_uuid}/{my_uuid}/{recipient_uuid}/sut, where

{itp_url} is a URL of ITP,  
e.g. http://interop.gsmainclusivetechlab.io
testing is an identification for Test Control that this URL is related to Test Cases flow
{session_id} the uuid of the session, generated by Test Control
e.g. 41a2e8d5-3ce4-459b-a6eb-1a1e2988c357
{my_uuid} is uuid of this simulator 
e.g. for MMO1 e5f5e817-94d6-4a43-a7ec-f7274b6d85c2
{recipient_uuid} is a uuid of simulator that I send a message to
e.g. for Mojaloop b2a85076-b748-4d93-8df1-2b39844e6d4b
sut is an identification for Test Control that this URL is related Simulator, so it includes a traceparent and its messages can be overridden

Thus, the URL of messages that MMO1 as SUT will send to Mojaloop (through Test Control) on Production server will be:

http://interop.gsmainclusivetechlab.io/testing/41a2e8d5-3ce4-459b-a6eb-1a1e2988c357/e5f5e817-94d6-4a43-a7ec-f7274b6d85c2/b2a85076-b748-4d93-8df1-2b39844e6d4b/sut

1.3.4) Mojaloop specifics
Mojaloop should also send messages to Test Control, instead of sending them to simulators/SUTs. This is being managed via FSP callbacks inside Mojaloop. More about the initial callbacks setup you can find here. There are 2 FSPs (for MMO1 and MMO2) that need to be setup per environment (e.g. Production or Staging).

The URL structure for callbacks is a very similar to simulators’ one:

http://{itp_url}/testing/{mojaloop_uuid}/{recipient_uuid}/simulator/{path}, where

{itp_url} is a URL of ITP,  
e.g. http://interop.gsmainclusivetechlab.io
testing is an identification for Test Control that this URL is related to Test Cases flow
{mojaloop_uuid} is uuid of this simulator 
e.g. b2a85076-b748-4d93-8df1-2b39844e6d4b
{recipient_uuid} is a uuid of simulator that I send a message to
e.g. for MMO1 e5f5e817-94d6-4a43-a7ec-f7274b6d85c2
simulator is an identification for Test Control that this URL is related Simulator, so it includes a traceparent and its messages can be overridden
{path} the pass that is necessary to execute exact callback

Below you can find some examples of callbacks in Mojaloop that were set for MMO1: 

FSPIOP_CALLBACK_URL_TRX_REQ_SERVICE
http://interop.gsmainclusivetechlab.io/testing/b2a85076-b748-4d93-8df1-2b39844e6d4b/e5f5e817-94d6-4a43-a7ec-f7274b6d85c2/simulator

FSPIOP_CALLBACK_URL_QUOTES
http://interop.gsmainclusivetechlab.io/testing/b2a85076-b748-4d93-8df1-2b39844e6d4b/e5f5e817-94d6-4a43-a7ec-f7274b6d85c2/simulator

FSPIOP_CALLBACK_URL_TRANSFER_POST
http://interop.gsmainclusivetechlab.io/testing/b2a85076-b748-4d93-8df1-2b39844e6d4b/e5f5e817-94d6-4a43-a7ec-f7274b6d85c2/simulator/transfers  

FSPIOP_CALLBACK_URL_TRANSFER_PUT
http://interop.gsmainclusivetechlab.io/testing/b2a85076-b748-4d93-8df1-2b39844e6d4b/e5f5e817-94d6-4a43-a7ec-f7274b6d85c2/simulator/transfers/{{transferId}}  

FSPIOP_CALLBACK_URL_TRANSFER_ERROR
http://interop.gsmainclusivetechlab.io/testing/b2a85076-b748-4d93-8df1-2b39844e6d4b/e5f5e817-94d6-4a43-a7ec-f7274b6d85c2/simulator/transfers/{{transferId}}/error  

FSPIOP_CALLBACK_URL_AUTHORIZATIONS
http://interop.gsmainclusivetechlab.io/testing/b2a85076-b748-4d93-8df1-2b39844e6d4b/e5f5e817-94d6-4a43-a7ec-f7274b6d85c2/simulator  

FSPIOP_CALLBACK_URL_PARTICIPANT_PUT
http://interop.gsmainclusivetechlab.io/testing/b2a85076-b748-4d93-8df1-2b39844e6d4b/e5f5e817-94d6-4a43-a7ec-f7274b6d85c2/simulator/participants/{{partyIdType}}/{{partyIdentifier}} 

FSPIOP_CALLBACK_URL_PARTICIPANT_PUT_ERROR
http://interop.gsmainclusivetechlab.io/testing/b2a85076-b748-4d93-8df1-2b39844e6d4b/e5f5e817-94d6-4a43-a7ec-f7274b6d85c2/simulator/participants/{{partyIdType}}/{{partyIdentifier}}/error 