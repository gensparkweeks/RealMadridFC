![RM-Banner](/assets/rm-banner.jpg "Real MAdrid")
## Welcome to the Real Madrid FC soccer team squad manage. 
###### Version 1.0

This is a Spring-Boot MySql React project. With this application we try to manage the squad of a soccer team in order to maintain it updated. Players, countries and posititions within a soccer game are managed for this application.

#### Spring Boot
We use Spring Boot to build our API backend.
* The project structure was made using [Spring Initializer](https://spring.io/).
* It contains three entities:
. Players
. Countries
. Positions
* This Backend also contains a unit test nodule.

#### MySQL
We use MySQL as a `database relational model` to store data
* This is the diagram of our realmadrd MySQL database:
![RM-Banner](/assets/mysql.png "realmadrid MySQL diagram")

#### React
We installed or update node to create our React module for our Front:
```sh
npm install npm -g 
cd main directory
npx create-react-app rm-frontend
```
We used `SweetAlert2` for alerts:
```sh
npm install --save sweetalert2
```
We worked with `axios` for doing http requests:
```sh
npm install --save axios
```
We also installed `react-roter-dom` for manage routes and more:
```sh
npm install --save react-router-dom
```
And `Moment` for formatting dates:
```sh
npm install --save moment react-moment
```
![RM-Banner](/assets/rm-banner.jpg "Real MAdrid")
