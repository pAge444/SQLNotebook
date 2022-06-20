# SQL NoteBook

## Introduction

I have created a SQL notebook web application which enables the users to send SQL queries to their specified database and get desired results of the queries. It is created using React and is a standalone front-end webapp. This application is a dummy application and there is no database (or its URL) attached to it. If you wish to run an instance of this application for your SQL database, you have to create a fetch component and specify the Database server's UQL in that component.

## UI documentation

This web application is a single page application where you can have multiple sql queries as input in different instances of Query-boxes. A query-box would contain a SQL query input and a SQL query output. The process of inputting, fetching and displaying the sql queries are:

- When the user hits Enter while in SQL query box or presses the RUn button beneath the query input box, the handleSubmit handler attached to the form defined in (/input/sqlQuery.js) component will activate.
- You can add your fetch command for the sql query there. he default behavior set currently is a Window alert showing "SQL query fetched".
- The output you get from the fetch can be shown in the format of a table by using the (/table/table.js) component joined together with the input in the Allquery.js component. You can create a Table by changing the data in the SampleData.js static file, or you can customize the source code of TableData.js to your SQL table's need.

You can add or delete instances of SQL query boxes by the Add or Delete button provided with each query-box. Adding a new instance instance will create a new instance of query-box after the current query-box and deleting will delete the instance or current query-box.

You can also see the documentation of the application in the documentation tab itself. A button is attached in the navbar.

## Prologue

I have tried to create a minimalist UI while fulfilling all types of need to have a fully stable front-end for fetching SQL queries. This is just a dummy application, which can provide a backbone for your requirements.
