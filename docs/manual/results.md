---
title: Test Results
sidebar_label: Test Results
---

After running tests using the API Client Tool, all results are stored and
available to the user in the test session on the Interoperability Test Platform.

## Session Results

As the tests are carried out, the platform stores the information for each
execution in the session history. Thus, the user can access and analyse all the
tests run for each test case. In the figure below it is possible to see the main
elements present in the session screen when several tests are performed and
then, a brief description of these elements is shown.

Session screen elements: ![ITP Session Info](/img/testsmainscreen.png)

1. Summary of the number of passed test cases. Failed tests are shown in red,
   passed tests in green, and un-executed tests, in grey.
2. Information about the execution of test cases. The information is grouped by
   date.
3. The user can choose the use cases and the test cases through this part of the
   interface.
4. When expanding option three, the user has an overview of test cases organized
   by use case and by happy flow and unhappy flow.
5. In this area, you can view the latest tests run and its information such as:
   - Test Case Name: Name given to the test case extracted from the information
     in the YAML file.
   - Run ID: Identifier created by the platform to differentiate this execution
     from the others. For the same test case executed more than once, the
     platform will assign different Run ID for each execution.
   - Status: Indicates the state of the test case execution and may contain the
     following values: pass, fail or un-executed.
   - Duration: Time in milliseconds that the execution of this test consumed
     <sup>[1](#testduration)</sup>.
   - Date: Describes when the test was performed.

## Accessing Test Case Results

When clicking on a test case, the user will have access to its information and
the results of all executions carried out for this particular test. The data
that can be seen are principally: configuration, description, preconditions,
test runs, test steps and test flow. This information will be further detailed
below.

Executions for a test case: ![List of Executed Tests](/img/runlist.png)

## Test Information

Each test case has relevant information for its execution. In the configuration
field it is possible to access the addresses of the simulated modules that are
necessary to run the test case. In the example in the previous figure, we can
see that the links to the Service Provider and Mojaloop are available in this
field, for the user to view or copy. The **description** contains the general
purpose of the test, describing the scenario under simulation. The
**preconditions** help in understanding how the tests should be performed and
state the existing decisions and rules that must be met for a correct execution
of the test.

### Test Runs

In the **Test Runs** tab are all the executions performed for the test case.
Each run contains information such as the test run identifier, the state, the
duration and how long ago the run was performed. This information is the same as
found in the latest tests run, shown in topic 5 of the figure of session screen
elements.

When selecting a run, the user can navigate through the steps that were taken
when the test was run. For each step it is possible to see the status, every
test performed for the step, and a log of the request and response messages. By
clicking on the performed test items list, you can see the information of the
request message that was sent and the expected message for the request. This
information is very useful to understand how the step works and the test case as
a whole, being notoriously relevant in situations of failure in one of the
steps.

Information of Test Runs tab: ![Example of Test Runs](/img/testruns.png)

### Test Steps

When choosing the **Test Steps** tab, it is possible to see a more detailed view
of each expected step when executing the test case. In each row of the table you
can see the method used, the endpoint and the source and destination modules
involved in the step being executed. In addition, an example of the request and
response for each step is also available.

Information of Test Steps tab: ![Example of Test Steps](/img/teststeps.png)

### Test Flow

The **test flow** consists of a sequence diagram showing the messages exchanged
between the components involved in the test. Through the flow diagram it is
possible to understand how the objects presented in the test collaborate with
each other and what is their behaviour over time. This information can also be
found in the test steps tab, however the diagram provides a simpler and more
objective view of the steps performed, while the steps view provides more
detailed information, such as data contained in the header and in the body of
the requests. The figure below displays a test flow for the same test mentioned
before.

If the user wishes, the test flow can be exported or edited. By clicking on the
Diagram Editor option, the code generated for the test flow is opened on the
Mermaid platform. Through Mermaid the user can change the flows, export
different types of images and generate the diagram markdown file. This
possibility can be a useful tool for creating and viewing new test cases before
proposing them to the Interoperability Test Platform.

Information of Test Flow tab: ![Example of Test Flow](/img/testflow.png)

---

##### Footnotes

- <a name="testduration">1</a>: This duration is directly related to the
  Interoperability Test Platform. The performance of the system under test is
  not evaluated here, since part of the test execution comes from simulated
  components.
