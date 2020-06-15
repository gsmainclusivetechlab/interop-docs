--- 
id: results
title: Test Results
sidebar_label: Test Results
--- 

As the tests are carried out, the platform stores the information for each execution in the session history. Thus, the user can access and analyse all the tests run for each test case. In the figure below it is possible to see the main elements shown for a session where several tests were performed and then a description of each element.

Session screen elements:
![ITP Session Info](/interop-docs/img/testsmainscreen.png)

1. Sumary of the number of passed test cases, in green, failed tests, in red, and unexecuted tests, in gray.
2. Information about the execution of test cases. The information is groupped by date. 
3. The user can choose the use cases and the test cases through this part of the interface.
4. When expanding option three, the user has an overview of test cases organized by use case and by happy flow and unhappy flow.
5. In this area, you can view the latest tests erformed with information such as:
    - Test Case Name: Name given to the test case extracted from the information in the yaml file.
    - Run ID: Identifier created by the platform to differentiate this execution from the others. For the same test case executed more than once, the platform will assign an identifier for each execution.
    - Status: Estate of the test case execution, and may contain the following values: pass, fail or unexecuted.
    - Duration: Time in milliseconds that the execution of this test consumed <sup>[1](#testduration)</sup>.
    - Date: Defines when the test was performed.


-----> Falar da tela após clicar em um caso de testes e do fato de mostrar todas as suas execuções, os passos e o fluxo para aquele caso de teste.

-----> Mostrar a tela quando se clica em uma execução de um teste. Mostrar a quantidade de passos, os testes realizados para cada passo. O request que foi enviado e a reposta recebida.

-----> Mostrarf o que acontece quando clicamos em cada um dos steps. Mostrar oara uma situação Pass e uma Fail

-----> Mostrar que para cada step temos todos os testes realizados para ele e que ao clicar podemos ver o comeando atual executado durante o teste e a informação esperada.

---

##### Footnotes

###### <a name="testduration">1</a>: Este tempo de duração está diretamente relacionado à Interoperability Test Platform. Não é avaliado aqui a performance do system under test, visto que parte da execução do teste provém de componentes simulados.