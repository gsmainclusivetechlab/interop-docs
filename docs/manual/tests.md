---
id: tests
title: Running Tests
sidebar_label: Running Tests
---

In way to run test cases, the user may use an API Client Tool such as
[Postman](https://www.postman.com), [Insomnia](https://insomnia.rest),
[Postwoman](https://postwoman.io), [HTTPie](https://httpie.org),
[SoapUI](https://www.soapui.org), [Paw](https://paw.cloud), etc. The tool allows
the user making requests for the Interoperability Test Platform using the
component addresses, namely the SUT, the Service Provider and the Mobile Money
Operator. These last two provided in the configuration step of session creation
and also in the test case information.

### Postman Collections

The requests that can be made for each test case are already grouped into
collections, preconfigured to be used, easing the testing process. The user has
the power to change the information and parameters, making possible to perform
different tests. To access the collections, visit
[ITP Postman Collections](https://interop.gsmainclusivetechlab.io/tutorials). It
is worth remembering that the collections can be easily adapted to any other
platform of your choice. The user can then run the test cases and, if desired,
change the request data to proceed with different
executions<sup>[1](#triggers)</sup>.

Collections available in Postman:
![Postman Collections](/img/postmancollections.png)

## Sending Requests from Postman

Once the System Under Test (SUT) is configured and the session created, the user
can then run the test cases. For this, it will be necessary to use component
addresses to configure the API Client Tool with the locations where the
Interoperability Test Platform simulated components and the SUT are located. In
this manual an example will be shown in which our SUT is the Mobile Money
Operator 1. Therefore, we are running this component locally and we will use the
Sevice Provider (SP) and the Switch (in this case Mojaloop ) as components
simulated by the Interoperability Test Platform.

:::note The addresses of the simulated components are made available on the
platform during the creation of a session, or on the initial screen of each test
case. :::

### Setting Test Environment

Once you have the collections of test cases and the address of the components, a
test environment must be created in our API client tool. The following figure
shows an example of creating an environment for validating test cases for P2P.
Note that the address used for Mobile Money Operator 1 is the address of the SUT
and the addresses of Mojaloop and Service Provider are provided by the platform
when creating a session.

:::important
The environment variables used for the components are respectively:
Service Provider - **sp_url**, Mobile Money Operator 1 - **mmo1_url**, Mojaloop
(switch) - **moja_url** and when necessary, Mobile Money Operator 2 -
**mm2_url**.
:::

Creating a New Environment in Postman:
![Creating a New Env](/img/creatingenv.png)

:::tip
Remember that when creating a new session, the parameters of the SUT need
to reference the simulated components. For our example in which the SUT is MMO1,
we need to configure the .env file of our local system under test with the
addresses provided for the SP and the Switch. 
:::

### Sending a Test Request

Now that we have the test parameters, present in the collections, and the
configured environment variables, the next step is to send the test requests for
execution. For this, the user chooses among the available test cases the one
he/she wants to send for execution on the Interoperability Test Platform. After
choosing the test, you can browse the information related to it, such as the
request header and body, for example. When desired, just select the send option
and then the request is sent to the platform.

Example of Test Case File Information:
![Example of Test Case File Information](/img/runtestcase.png)

Depending on how the test case transaction occurs, it may contain more than one
execution step. When this happens, you can see the different files in the
collection grouped in a folder with the name of the test case. In the example we
are using as a basis, we can see this happening when the test cases need access
to the Account Lookup System (ALS), where there are two execution files for
these tests. Thus, there is a need to send the GET request and then send the
POST request for the complete execution of the test case.

:::warning The test cases have triggers that must be attended to in order for
the platform to recognize the test to be performed. These parameters are defined
in the test case preconditions under the item _Required Parameters for
Execution_. :::

After the execution, the user receives the result of the request, which can be
either a success or an execution error. The following result message is an
example of a possible test request error when one of the triggers is changed to
an unrecognized value.

```bash
{
    "message": "No query results for model [App\\Models\\TestStep]."
}
```

After sending the request, some random variables are created in the current
environment. In our example, for the execution of P2P test cases, two variables
are made necessary: QuoteID and TransacrtionID. These variables values are
automatically generated with each test run and added to the current environment.
The following figure distinguishes the variables added by the user within the
red square from the variables generated when the requests are sent, represented
within the blue square.

Environment Variables in Postman After a Request:
![Environment Variables](/img/environmentconfig.png)

### Running Multiple Tests

Depending on which API Client Tool is being used, there is the possibility of
running multiple batch tests. This speeds up the evaluation process when it
involves many test cases. In [Postman](https://www.postman.com), this
possibility is allowed through the Collection Runner option. In this modality,
it is possible to define parameters for the execution of test cases collection,
such as: number of iterations, delay between requests, and so forth.

Running a Collection of Test Cases:
![Run Test Case Collection](/img/runcollection.png)

---

##### Footnotes

- <a name="triggers">1</a>: It is important to pay attention to the required
  parameters for execution present in the the test cases, since they are used as
  triggers for tests.
