---
title: Creating Test Case
sidebar_label: Creating Test Case
---

This tutorial shows how to create a Test Case for the [Interoperability Test Platform](https://interop.gsmainclusivetechlab.io). The premise is to guide the creation of a Test Case considering a Sequence Diagram for a particular Use Case Scenario already defined. You can know more about Use Cases accessing [Proposing New Use Case](https://docs.interop.gsmainclusivetechlab.io/testcases/proposing-uc) documentation.

As a Test Case is defined in a YAML file, it is recommended to use a text editor with highlight support for YAML files. You will need an account on the Interoperability Test Platform also.

## Use Case

We are going to use a [Disbursement Use Case](https://developer.mobilemoneyapi.io/1.2/content/disbursements) and create a new Test Case for the Use Case Scenario where an Organisation wants to obtain a disbursement balance from their account in a given Mobile Money Operador - MMO. The definition of the Use Case can be found at [Developer's Portal](https://developer.mobilemoneyapi.io/content/obtain-disbursement-organisation-balance) for Mobile Money API.

### Use Case Scenario

- Obtain a Disbursement Organisation Balance

This use case returns the balances for a disbursement organisation.


![Use Case Scenario](/img/use-case-scenario.png)

First we have to capture the information presented in the Sequence Diagram that represents the Use Case Scenario and translate it to the fields of a Test Case. For each information that is discovered, we are presenting the resulting YAML file and all fields necessary for a Test Case.

### Test Case Sections

A Test Case is basically defined in three sections in the YAML file, as described in the documentation [Test Case Template](https://docs.interop.gsmainclusivetechlab.io/testcases/template-tc). This three sections contains fields that has the same hierarchy in the YAML file. 

- **Information** - acts as a header that provides information about the Test Case itself, like name, description, etc. It has the following fields: `name, slug, use_case, behavior, description, precondition`
- **Components** - defines the acting parts, like an organisation, a mobile money operador, a mojaloop hub, into `components` that will interact in the Test Case.
- **Test Steps** - holds the definition of each step that needs to be executed by a Test Case on the field `test_steps`. It's related to the API Calls defined by the Mobile Money API.

Now we can see a YAML file of a Test Case like the following stub:

```yaml
# Start Information header
name: ...
slug: ...
use_case: ...
behavior: ...
description: ...
precondition: ...
# End Information Header

# Start Components
components: ...
# End Components

# Start Test Steps
test_steps: ...
# End Test Steps

```

The next steps are how we should analyse the Use Case, Use Case Scenario and Sequence Diagram to extract the information needed to create a Test Case. For that, we'll use the stub and fill in the fields and values associated.

### Information (Header)

The values for the fields of the header section can be extracted from the textual definition of the Use Case as `use_case`and Use Case Scenario as`name`. Also we notice that for this scenario the Organisation is expecting to receive a balance, so the `behavior` is for a correct execution flow, in other words, a `positive` behavior. The `description` should present the Test Case in a more detailed way and `precondition`should state any requirements or constrains to run the test case. Translating into the YAML file, we have the following header:

```yaml
# Start Information Header
name: 'Obtain a Disbursement Organisation Balance - success'
slug: obtain-disbursement-organisation-balance-success
use_case: Disbursement
behavior: positive
description: |
  The Organisation wants to test if it is capable of obtaining the
  disbursement balance from their account within MMO. In this case,
  we simulate the scenario when the Organisation would like to obtain
  the balance of their account. This flow shows the necessary steps for
  this request simulating a successful response.
precondition: |
  - Service Provider has GSMA Mobile Money API Implemented.
  - Define the envrionment variables to customise this test case:
    - `IDENTIFIERTYPE`, default value is `accountid`
    - `IDENTIFIER`, default value is `2000`
  - Required Parameters for Execution:
    `IDENTIFIER` should be a valid value according to `IDENTIFIERTYPE`
# End Information Header
```

The `precondition` field was added because the Mobile Money API specifies the variables `identifierType` and `identifier` in the GET request which may be constrained to a specific value, but this depends entirely on what is being tested. Also mind that this section is a textual description for the reader of the Test Case and does not play any role when the test case is run. For the values of `identifierType` and `identifier`, see the schema definition for the Mobile Money API. [https://developer.mobilemoneyapi.io/1.2/oas3/22537#/operations/Accounts/accountsIdentifierTypeIdentifierGET](https://developer.mobilemoneyapi.io/1.2/oas3/22537#/operations/Accounts/accountsIdentifierTypeIdentifierGET)

### Components

`Components` are a important part of a Test Case because it defines the entities that is going to be tested by the Interoperability Test Platform, like a Mobile Money Operator that provides wallets to its customers or an Organisation that wants to make a salary payment. A component can be entirely simulated by the Interoperability Test Platform or can be a real implementation of the Mobile Money API.

The information needed to create the components section can be extracted from the Sequence Diagram and is related to the **Parties or Actors** that are interacting in the Test Case. In our example, we have a **Disbursement Organisation** and a **Mobile Money Provider**. These are the Parties/Actors that are mapped into `components` section of the Test Case. Below you can see how the section is defined:

```yaml
components:
  - name: 'Mobile Money Operator'
    slug: mmo
  - name: 'Organisation'
    slug: org
```

The field `slug` will be used to run the Test Case and `name` will be used by the Interoperability Test Platform to show a more user-friendly name in the UI for the Parties/Actors involved in the Test Case.

### Test Steps

This part of the Test Case gets more technical because it is representing information from the HTTP protocol methods and codes that is used by the Mobile Money API and described in the Sequence Diagram. But understand how to map this information is fundamental since this is going to be how the Test Case will be executed by the Interoperability Test Platform.

The Sequence Diagram shows all the HTTP methods, codes and expected requests and responses for the Use Case Scenario. HTTP methods and codes are mapped into `test_steps` section, where each request and response is a step. In our example, only one step will be created, so we can start our next section like this:

```yaml
test_steps:
  - path: '/accounts/{identifierType}/{identifier}/balance'
    pattern: '^accounts/$'
    method: GET
    source: org
    target: mmo
    api_spec: 'MM v1.1.2'
```

A `test_steps` has a `path` field which can be mapped directly from the GET method in the Sequence Diagram. The `pattern` will enforce the test matching if there is another Test Case with the same path but different values for the variables. The `method` stores which HTTP method should be used by the test. The Parties/Actors mapped as `components` should be used in `source` and `target` specifing what is the test flow, in this case it starts from the Organisation to Mobile Money Operator. The last mapping is the `api_spec` field which defines the Mobile Money API spec that is being used to run the Test Case.

So far we are only defining the fields and values in the YAML file that we can extract directly from the Use Case, the Use Case Scenario and the Sequence Diagram as well from Mobile Money API spec itself. Now we start to define how the Test Case should be run. For this, we have to look into a few more fields inside the `test_steps` section:

- **Scripts**

For each `test_steps` we can have `test_request_scripts` and `test_response_scripts` that ensures the correctness of the requests and responses parameters, applying **business rules** based on fixed values or regex expressions. For more information on test scripts, see [https://docs.interop.gsmainclusivetechlab.io/testcases/creating-tc#assertions-test_request_scripts-and-test_response_scripts](https://docs.interop.gsmainclusivetechlab.io/testcases/creating-tc#assertions-test_request_scripts-and-test_response_scripts)

Below we have the definition for our Test Case:

```yaml
test_request_scripts: #...
test_response_scripts:
	- name: 'Balance check was successfully sent'
    rules:
      status: 'required|in:200'
  - name: 'currency is specified correctly'
	  rules:
      body.currency: 'required|regex:/^[A-Z]{3}/'
```

In our example, we do not have business rules for `test_request_scripts` because the request type is a GET method and no parameter is passed in the body of the TTP message. But we do have business rules for `test_response_scripts` since we want to check if the response message is the HTTP 200 and if the currency field n the body is composed by 3 letters.

- **Requests and Responses**

The last part of the Test Case is the definition of the `request` and `response` messages to be simulated and tested by the Interoperability Test Platform. Below e have the structure for define this components of the Test Case:

```yaml
request:
  method: GET
  uri: '/accounts/{{ env.IDENTIFIERTYPE|default("accountid") }}/{{ env.IDENTIFIER|default("2000") }}/balance'
  headers:
    X-Date: '{{ new_date_iso8601() }}'
    content-type: application/json
    body: empty_body
response:
  status: 200
  headers:
	  X-Date: '{{ new_date_iso8601() }}'
      content-type: application/json
    body:
      accountStatus: available
      currentBalance: 0.0
      availableBalance: 0.0
      reservedBalance: 0.0
      unclearedBalance: 0.0
      currency": "USD"
```

This part is strictly dependent of the Mobile Money API API that is being used. The requests and responses must contain all the field that is mandatory by the API, like X-Date, content-type and fields in the body. For this test case, you can check the mandatory values directly in the MM API definition here: [https://developer.mobilemoneyapi.io/1.2/oas3/22537#/operations/Accounts/accountsIdentifierTypeIdentifierGET](https://developer.mobilemoneyapi.io/1.2/oas3/22537#/operations/Accounts/accountsIdentifierTypeIdentifierGET)

Also here we can make default values for the Test Case or rely on environment variables making the tests more dynamic. For example, the uri definition can use values from environment variables **IDENTIFYERTYPE** and **IDENTIFIER** if they are provided or just use the default values **accountid** and **2000**.

## Putting all Together

The final YAML file containing the definition of the Test Case is presented below:

```yaml
name: 'Obtain a Disbursement Organisation Balance - success'
slug: obtain-disbursement-organisation-balance-success
use_case: Disbursement
behavior: positive
description: |
  The Organisation wants to test if it is capable of obtaining the disbursement balance from their account within MMO. In this case, we simulate the scenario when the Organisation would like to obtain the balance of their account. This flow shows the necessary steps for this request simulating a successful response.
precondition: |
  - Service Provider has GSMA Mobile Money API Implemented.
  - Define the envrionment variables to customise this test case:
    - `IDENTIFIERTYPE`, default value is `accountid`
    - `IDENTIFIER`, default value is `2000`
  - Required Parameters for Execution:
    `IDENTIFIER` should be a valid value according to `IDENTIFIERTYPE`
components:
  - name: 'Mobile Money Operator'
    slug: mmo
  - name: 'Organisation'
    slug: org
test_steps:
  - path: '/accounts/{identifierType}/{identifier}/balance'
    pattern: '^accounts$'
    method: GET
    source: org
    target: mmo
    api_spec: 'MM v1.1.3'
    test_response_scripts:
      - name: 'Balance check was successfully sent'
        rules:
          status: 'required|in:200'
      - name: 'currency is specified correctly'
        rules:
          body.currency: 'required|regex:/^[A-Z]{3}/'
    request:
      method: GET
      uri: '/accounts/{{ env.IDENTIFIERTYPE|default("accountid") }}/{{ env.IDENTIFIER|default("2000") }}/balance'
      headers:
        X-Date: '{{ new_date_iso8601() }}'
        content-type: application/json
      body: empty_body
    response:
      status: 200
      headers:
        X-Date: '{{ new_date_iso8601() }}'
        content-type: application/json
      body:
        accountStatus: available
        currentBalance: 0.0
        availableBalance: 0.0
        reservedBalance: 0.0
        unclearedBalance: 0.0
        currency": "USD"
```

## Proposing New Test Cases

Any party interested in using the Interoperability Test Platform can propose new
test cases using the template presented here. For this, it is important to
follow the creation guide [starting from a use case](./proposing-uc), to
understand its application context, then determine which paths should/need to be
tested. Then, it is possible to use the template shown below to create the test
cases for each path. The creation of new test cases is based on the following
roadmap:

1. Elaboration and understanding of the scenario you want to test;
2. Creation of a use case that can be implemented by ITP;
3. Description of the use case following the model available
   [here](/testcases/proposing-uc);
4. Definition of the paths that should be tested for the use case (happy and
   unhappy flows);
5. Preparation of each test case following the model below.

## Using the Test Case visual Editor

Although test cases are often quicker to produce using the YAML syntax, it is
also possible for users with the Test Case Creator role to edit test cases
directly through the web interface.
