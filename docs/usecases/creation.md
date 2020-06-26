---
id: creation
title: Creating New Use Cases
sidebar_label: Creating a Use Case
---

The creation of new Use Cases (UC) should take into account the modules and
features pre-existing on the platform. If the modules needed for a UC creation
are already present, the inclusion of the use cases and test cases may occur
quickly or even immediately. However, if a use case involves other components
besides those that already exist, the
[GSMA Inclusive Tech Lab](http://www.gsma.com/lab) is on hand to accept
suggestions, and incorporate them into future Interoperability Test Platform
updates.

In order to create these new cases and submit them to our team, it is necessary
to understand and detail the scenario that will be simulated. Below we provide
relevant information and a few steps to follow for creating and proposing new
test cases.

### List of Steps

1. **Definition of a Scenario:** Firstly, it is necessary to understand the
   scenario in which the use case is inserted, as well as the actors and
   entities involved.
2. **Creating a User Story:** As a way of exemplifying the use case scenario,
   User Stories can be used to give examples of real events where the use case
   may be applied.
3. **Choosing the evaluation paths:** It is important to detail the different
   evaluation paths for the use case. This process will facilitate the
   understanding of the flow and the creation plan for the test cases that will
   be used to validate each path. Both happy flows and unhappy flows may be
   considered.
4. **Sequence Diagram:** If possible, the creation of a sequence diagram for the
   different paths will ease the test cases definition. You can also use the
   section [Creating a Test Case](/testcases/template) to learn how to create a
   Test Case YAML file directly.

### Use Case Description

The following table contains essential fields for defining use cases. Before
describing a new UC we suggest understanding and filling out this information.

|                         Use Case Name: | Name by which the use case will be identified                                 |
| -------------------------------------: | :---------------------------------------------------------------------------- |
|                               Summary: | A summary explaining the scenario that will be simulated by the use case      |
|                                Actors: | Actors who may be involved in the transaction                                 |
|                         Preconditions: | Preconditions that must be met for the use case to be successfully simulated  |
|                           Description: | A step-by-step description of the use case's operating sequence               |
| Exceptions<sup>[1](#exceptions)</sup>: | The exceptions that you want to address during the validation of the use case |
|                        Postconditions: | What state we can expect after simulating the use case                        |

:::note PlantUML

To create the sequence diagrams that describe each path of the use case, we use
the tool [PlantUML](https://plantuml.com/). If you would like to attach test
flow examples along with the suggested use case/test case, we have provided an
example file for the [Test Case P2P0100](/files/diagrams/p2p0100.plantuml).

:::

:::note Use Case Submission

Suggestions for new test cases please contact the GSAMA Inclusive Tech Lab -
[www.gsma.com/lab](www.gsma.com/lab)

:::

---

##### Footnotes

- <a name="exceptions">1 </a>: The exceptions listed are directly related to
  alternative paths the use case can take. Using the exceptions, it is possible
  to derive the unhappy flows covered by the appropriate test cases.
