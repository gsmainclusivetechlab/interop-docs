---
id: architecture
title: Architecture
sidebar_label: Architecture
---

This section describes the high-level architecture of the Interoperability Test Platform.
The platform was designed to be possible scale and integrate with other simulators in the future, for that reason we have 4 main components: Test Platform, Simulators, Mojaloop and System Under Tests(SUTs).
The system can handle 2 System Under Test, Service Providers and Digital Financial Service Providers.

![High Level Architecture](/interop-docs/img/architecture_high_level.png)

## Test Platform

It's the core of the system which is subdivided into 4 main blocks: Frontend, Backend, Test Management and Proxy. Within this, the test platform can provide a UI, manage users, manage sessions, manage test cases, intercepts messages between simulators and SUTs and test each message that is sent or received by the platform.
The platform uses [Laravel](https://laravel.com/), a web application framework which uses PHP as base language.

### Frontend

The frontend responsible for rendering the UI and uses 2 main technologies: [Vue.js](https://vuejs.org/) and [Tabler](https://tabler.io/).

*   Vue.js: is used to build a single page application.
*   Tabler: provide the admin and dashboard layout to build the UI, underneath uses [Bootstrap](https://getbootstrap.com/) one the most popular frontend frameworks.

### Backend

The backend is responsible for providing the data to UI and interact with the database, and uses 1 main technology: [Inertia.js](https://inertiajs.com/).

*   Inertia.js: Allows to create a single page application without the need to build an API.

### Test Management

It's the core part of the testing which holds the test case, test run and test validators, and uses 1 main technology: [OpenAPI PSR-7 Message Validator](https://github.com/thephpleague/openapi-psr7-validator), besides the testing logic create for this.
The test management supports 2 types of validation Schema validation and Business rule validations, more details [here]().

*   OpenAPI PSR-7 Message Validator: Combine the power of OpenAPI Spec and PS7-Message, and validates all messages(request/response) in the platform.

### Proxy

One of the objectives of the platform is to provide an end-to-end chain of all messages that happens in a real implementation using a Mojaloop hub. The proxy layer was created with this purpose. All messages pass to a proxy layer where the platform is able to get the message, store, validate and send to the correct simulator to process the response and possible next message, if needed.

![Component Scheme](/interop-docs/img/itpconnections.png)

## Simulators

The simulators is an important part of the system and holds the knowledge of messages and how to drive

**SP Simulator**: represents Service Provider

**MMO1 simulator**: represents Payee’s FSP

**MMO2 simulator**: represents Payer’s FSP

## Mojaloop

interoperability platform that connects MMO1 and MMO2 so that they can perform Use Cases (business operations like transfer funds in between MMOs)

## System Under Test
