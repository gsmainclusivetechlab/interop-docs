---
id: session
title: Test Sessions
sidebar_label: Test Sessions
---

The execution of tests in the Interoperability Test Platform (ITP) is performed
through the creation of sessions. Sessions are a selection of use cases and test
cases with a validation purpose and possibly a common scope. During the creation
of a session, the user sets the address of the SUT, defines information related
to the session and selects the test cases to be included. After creation, it is
possible to run tests by changing parameters for each test case. The created
session is available on the home screen of the ITP (as shown in the picture
below), allowing the user to consult previously run tests, delete and run new
tests.

Home screen with the user sessions: ![ITP Home](/img/itphome.png)

## Creating a Test Session

To create a session you must perform three main steps: SUT Selection, Session
Setup and SUT Configuration.

### Step 1: SUT Selection

In this step, you must enter basic information about the system under test (SUT)
by the platform: the type of the **SUT** and its **URL**.

**SUT:** The currently supported SUT types are `Service Provider`,
`Mobile Money Operator 1` and `Mobile Money Operator 2`.

**URL:** To test your system, it must be accessible from the test platform.
Enter the URL of your SUT, which the test platform will use to send requests as
part of test execution.

If you do not currently have a SUT, but still wish to explore the
interoperability test platform, you can simulate a Service Provider SUT using
the instructions [here](postman-sut).

Step 01 - Selecting the system under test:
![ITP Session SUT Selection](/img/itpselectsut.png)

### Step 2: Session Setup

In this step, you can add information about the session you are creating:

**Name:** Alias used to name the session. This name will be visible in the
dashboard.

**Description:** Information about the session, to help explain the purpose of
the session.

**Use Cases:** All use case and test cases which are relevant for the
currently-selected SUT type are displayed here. You can select any set of test
cases to run during this session.

Step 2 - Session Setup form: ![ITP Session Info](/img/itpsessioninfo.png)

### Step 3: Configure SUT

During the execution of the tests, your SUT will need to communicate with other
components (such as FSP simulators). In step 3 of the session creation wizard,
you will be presented with the URLs that your SUT should use for this
communication. These URLs can also be retrieved after the session has been
created from the session results page.

Step 3 - Component URLs:
![ITP Session Configure Components](/img/itpsessionconfigure.png)

After the session has been created, you will be able to see the test cases
selected during creation. From there, it is possible to select a specific test
case and proceed with the test execution.

Example of session main screen after its creation:
![Session Screen](/img/itpsessionscreen.png)

## Running Tests

Once your test session has been created, there are two ways to trigger test
execution, depending on the flow under test. For flows which begin with a
request from the SUT, simply trigger this request on your SUT. For flows which
begin with a request from another component, a button will be visible on the
test case results page labelled "Run Test Case". Clicking the button will send
this initial request, and the remainder of the test flow will proceed according
to the test case definition.

![Run Test Case](/img/run-test-case.png)