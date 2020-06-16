--- 
id: results
title: Test Results
sidebar_label: Test Results
--- 

As the tests are carried out, the platform stores the information for each execution in the session history. Thus, the user can access and analyse all the tests run for each test case. In the figure below it is possible to see the main elements  present in the session screen when several tests are performed and then, a brief description of these elements is shown.

Session screen elements:
![ITP Session Info](/interop-docs/img/testsmainscreen.png)

1. Sumary of the number of passed test cases, in green, failed tests, in red, and unexecuted tests, in gray.
2. Information about the execution of test cases. The information is groupped by date. 
3. The user can choose the use cases and the test cases through this part of the interface.
4. When expanding option three, the user has an overview of test cases organized by use case and by happy flow and unhappy flow.
5. In this area, you can view the latest tests run and its information such as:
    - Test Case Name: Name given to the test case extracted from the information in the yaml file.
    - Run ID: Identifier created by the platform to differentiate this execution from the others. For the same test case executed more than once, the platform will assign an identifier for each execution.
    - Status: Estate of the test case execution, and may contain the following values: pass, fail or unexecuted.
    - Duration: Time in milliseconds that the execution of this test consumed <sup>[1](#testduration)</sup>.
    - Date: Defines when the test was performed.

When clicking on a test case, the user will have access to information and the results of all executions carried out for this particular test. The data that can be seen are principally: configuration (1), description (2), preconditions (3), test runs (4), test steps (5) and test flow (6). This information will be further detailed below.

![List of Executed Tests](/interop-docs/img/runlist.png)

### Test Information

Each test case has relevant information for its execution. In the confuiguration field it is possible to access the addresses of the simulated modules that are necessary to run the test case. In the example in the previous figure, we can see that the links to the Service Provider and Mojaloop are available in this field, so the user can view or copy. The other two relevant information are extracted from the YAML file created for the test case and are: description and preconditions. The description contains the general purpose of the test, describing the scenario under simulation. The preconditions help in understanding how the tests should be performed and state the existing decisions and rules that must be met for the correct execution of the tests.

### Test Runs

In the **Test Runs** tab are all the executions performed for the test case. Each run contains information such as the test run identifier, the state, the duration and how long the run was performed. This information is the same as found in the latest tests run, shown in topic 5 of the figure of session screen elements.

When selecting a run, the user can navigate through the steps that were taken when the test was run. For each step it is possible to see the status of the same, all the necessary tests so that the step is complete and the request and response messages. By clicking on the performed test itens list, it is possible to view the information of the request message that was sent and the expected message for the request. This information is very useful to understand how the step works and the test case as a whole, being notoriously relevant in situations of failure in one of the steps. The following figure shows a screen of the system with this information previously described.

![Example of Test Runs](/interop-docs/img/testruns.png)

### Test Steps

When choosing the **Test Steps** tab, it is possible to see a more detailed view of each step when executing the test case. In each row of the table you can see the method used, the endpoint and the source and destination modules involved in the step being executed. In addition, the information that was used in the request and response for each step is also available. The following figure shows an example of visualization of the steps for the execution of a test case for P2P in which the transaction is accepted, having receive for amount type and disclosing fees and commissions.

![Example of Test Flow](/interop-docs/img/teststeps.png)

### Test Flow

The **test flow** consists of a sequence diagram showing the messages exchanged between the components involved in the test. Through the flow diagram it is possible to understand how the objects involved in the test collaborate with each other and what is their behavior over time. This information can also be found in the test steps tab, however the diagram provides a simpler and more objective view of the steps performed, while the steps view provides more detailed information, such as data contained in the header and in the body of the requests. The following picture displays a test flow for the same test mentioned before: an accepted P2P transaction with amount type receive and disclosing of fees and commissions.

If the user wishes, the test flow can be exported or edited. By clicking on the Diagrgam Editor option, the code generated for the test flow is opened on the Mermaid platform. Through Mermaid the user can change the flows, export different types of images and generate the diagram markdown. This possibility can be a useful tool for creating and viewing new test cases before proposing them to the Interoperability Test Platform.

![Example of Test Flow](/interop-docs/img/testflow.png)

---

##### Footnotes

###### <a name="testduration">1</a>: This duration is directly related to the Interoperability Test Platform. The performance of the system under test is not evaluated here, since part of the test execution comes from simulated components.
