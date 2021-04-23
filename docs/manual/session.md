---
title: Test Sessions
sidebar_label: Test Sessions
---

The execution of tests in the Interoperability Test Platform (ITP) is performed
through the creation of sessions. Sessions are defined by a selection of test
cases. During the creation of a session, the user selects the test cases to be
included, selects any SUTs and configures their address and encryption details.
After creation, it is possible to run tests by clicking the "Run Test Case"
button. The newly-created session is available on the home screen of the ITP (as
shown in the picture below), allowing the user to consult previously run tests,
delete and run new tests.

Home screen with the user sessions: ![ITP Home](/img/itphome.png)

## Creating a Test Session

To create a session you must perform three main steps: Session Setup, SUT
Selection and SUT Configuration.

### Step 1: Session Setup

In this step, you can add information about the session you are creating:

**Name:** Alias used to name the session. This name will be visible in the
dashboard.

**Description:** Information about the session, to help explain the purpose of
the session.

**Test Cases:** All use case and test cases which are relevant for the
currently-selected SUT type are displayed here. You can select any set of test
cases to run during this session.

Step 1 - Session Setup form: ![ITP Session Info](/img/itpsessioninfo.png)

### Step 2: SUT Selection

In this step, you may select any number of SUTs to take part in the test. If you
select no components, the test will be fully simulated by the platform, and you
will be able to view an end-to-end execution of the test case without any
external systems. On the other hand, if you select all components as SUTs, the
platform will simply act as a proxy layer between the components, with no
behaviour simulated at all.

For each SUT selected, you will need to enter a URL which the test platform will
use to send requests. If you wish to use an mTLS encrypted connection to your
system, you should select "Use Encryption" and provide appropriate certificates.
For more details on the certificate upload process, please see
[mTLS configuration](./mtls).

Step 2 - Selecting the system under test:
![ITP Session SUT Selection](/img/itpselectsut.png)

### Step 3: Configure components

During the execution of the tests, your SUT will need to communicate with other
components (such as FSP simulators). In step 3 of the session creation wizard,
you will be presented with the URLs that your SUT should use for this
communication. These URLs can also be retrieved after the session has been
created from the session results page.

Step 3 - Component URLs:
![ITP Session Configure Components](/img/itpsessionconfigure.png)

In the screenshot above, DFSP 1 is a SUT, and it should use the URL provided to
send any requests intended for Mowali Hub.

As described in [Connections](../architecture/connections), the URLs provided at
this stage are dynamic, and include the session UUID. If your user is a member
of a group, you can select the session as the default session for your group
instead, which will provide a static group URL at this stage instead.

Finally, this page is also where environment variables are configured for the
session. These environment variables will affect the behaviour of the test
cases, so it is important to match the variable names that are used in the test
case. The environment variable _names_ which are used in the selected test cases
will be set up automatically. These should be further documented in the test
case preconditions, and it is possible to adjust the session environment
variables at any time. If you are a member of a [user group](./groups), you can
also "merge" the currently configured environment with a group environment which
is preconfigured within your group.

After the session has been created, you will be able to see the test cases
selected during creation. From there, it is possible to select a specific test
case and proceed with the test execution.

Example of session main screen after its creation:
![Session Screen](/img/itpsessionscreen.png)

## Running Tests

Once your test session has been created, you can trigger the execution of a test
by clicking the "Run Test Case" button. If the flow begins with a request from a
simulator, the first steps will automatically be executed. If the flow begins
with a request from a SUT, the platform will listen for the incoming request
from the component.

In the case that the flow begins with a SUT, it is also possible to trigger
execution of a test case implicitly by sending the first test request without
first clicking on the "Run Test Case" button. If you do this, it is important to
ensure that all selected test cases in the session are unambiguous in terms of
path and trigger, otherwise the request may be associated with a different test
case than the one you were expecting.
