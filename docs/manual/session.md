---
id: session
title: Test Sessions
sidebar_label: Test Sessions
---

The execution of tests in the Interoperability Test Platform (ITP) is performed
through the creation of sessions. Sessions are a group of use cases and test
cases with a validation purpose and possibly a common scope. Through the
sessions it is possible to modularize the groups of tests by affinity, as the
user wishes and taking into account the selection of the System Under Test
(SUT). During the creation of a session, the user sets the address of the SUT,
defines information related to the session and selects the test cases to be
included. After creation, it is possible to run tests by changing parameters for
each test case. The created session is available on the home screen of the ITP
(as shown in the picture below), allowing the user to consult previously run
tests, delete and run new tests.

Home screen with the user sessions: ![ITP Home](/img/itphome.png)

## Creting a Test Session

During the creation of a session the user must perform three main steps. In each
step the user might insert information and parameters related to the session to
be created. Following, each step and the form required fields are described.

### Step 01: SUT Selection

In this step, the user must enter the information about the SUT that will be
tested by the platform. The form consists of two fields: type of **SUT** and
**URL**.

**SUT:** The user must choose the type of SUT to be included in the session. The
current types are Service Provider, Mobile Money Operator 1 and Mobile Money
Operator 2.

**URL:** The user inserts the link of the SUT included in the session. There are
two possibilities: the user can choose to test with his own
SUT<sup>[1](#instancedsut)</sup> or with a SUT simulated by the
platform<sup>[2](#simulatedsut)</sup>.

Step 01 - Selecting the system under test:
![ITP Session SUT Selection](/img/itpselectsut.png)

### Step 02: Session Info

In this step the user must provide information for the definition and creation
of the session using 3 main fields, which are:

**Name:** Alias used to name the session. This name will be visible in the
dashboard.

**Description:** Information described by the user to help understand the
purpose of the section created.

**Use Cases:** In this part, considering the type of SUT chosen, all use cases
and their respective test cases are shown. The user can then select the test
cases to be used by the session under creation. It is worth mentioning that the
test cases for each use case are divided into happy flow and unhappy flow.

Step 02 - Session information form: ![ITP Session Info](/img/itpsessioninfo.png)

### Step 03: Configure Components

In this step, the components other than the SUT, which must be present in the
execution of the tests, are automatically filled with addresses of components
simulated by the platform. During the execution of tests for a session, these
addresses remain at the user's view so that they can be copied and used in the
execution of tests using an API client tool, such as
[Postman](https://www.postman.com) or [Insomnia](https://insomnia.rest), for
example.

Step 03 - Information about the configure components:
![ITP Session Configure Compponents](/img/itpsessionconfigure.png)

After the session has been created, the user has at his disposal the group of
test cases selected during the creation steps. From there, it is possible to
select a specific test case and proceed with the test execution.

Example of session main screen after its creation:
![Session Screen](/img/itpsessionscreen.png)

---

##### Footnotes

- <a name="instancedsut">1</a>: To understand about how to run your ouwn SUT
  read more in the installation section.
- <a name="simulatedsut">2</a>: This possibility in under construction and will
  allow the user to use the platform simulating all componentes, including the
  SUT.
