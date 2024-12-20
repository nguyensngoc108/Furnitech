# FURNITECH
Course: Web Application Development

![Furnitech Presentation.png](https://github.com/nguyensngoc108/Furnitech/blob/main/Furnitech%20Presentation.png)



<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

</div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/nguyensngoc108/Furnitech">
  </a>

<h3 align="center">Furniture E-commerce Website</h3>

  <p align="center">
   This project is developed for providing students with hands-on experience in web development. Simulating a real-world e-commerce platform, where users can browse, purchase, and review furniture products while administrators manage inventory and orders.
    for Web Application Course in International University - VNUHCM!
    <br />
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
# Table of contents :round_pushpin:
1. [Introduction](#Introduction)
2. [Tech stack](#Tech_stack)
3. [Entity Relationship Diagram](#ERD)
4. [Interface](#Interface)
5. [Challenges](#Challenges)
6. [Acknowledgments](#Acknowledgments)
7. [References](#References)

<!-- ABOUT THE PROJECT -->

## 1. Introduction <a name="Introduction"></a> :bricks:

<div align="center">
<img src="screenshots/Intro.gif" alt="">
</div>

<div style="text-align:justify">
In today’s digital age, the furniture industry has witnessed a significant transformation, transitioning from traditional brick-and-mortar stores to dynamic online platforms. E-commerce has become an essential channel for businesses to meet the growing demand for convenience, variety, and personalized shopping experiences. This report delves into the development and operational aspects of a furniture e-commerce website, which serves as a comprehensive platform for customers to browse, select, and purchase furniture products from the comfort of their homes.
</div>

### Team Members :couplekiss_man_man:

| Order |         Name          |     ID      |              Email               |                       Github account                        |                      
| :---: |:---------------------:|:-----------:|:--------------------------------:| :---------------------------------------------------------: | 
|   1   |   Huỳnh Thanh Thủy    | ITITIU21325 | ITITIU21325@student.hcmiu.edu.vn |           [TracyHT](https://github.com/TracyHT)         |
|   2   |    Đoàn Hữu Nguyên    | ITITIU20260 | ITITIU20260@student.hcmiu.edu.vn | [nguyensngoc108](https://github.com/nguyensngoc108) |           |
|   3   |    Nguyễn Vạn Huy     | ITITIU20215 | ITITIU20215@student.hcmiu.edu.vn |       [ITITIU20215](https://github.com/ITITIU20215)       |      |
|   4   | Nguyễn Phạm Kỳ Phương | ITITIU21287 | ITITIU21287@student.hcmiu.edu.vn |       [npkyphuong04](https://github.com/npkyphuong04)      |


### Overview
The website provides secure customer authentication, a shopping cart for managing selected items, an order system for tracking purchases, and robust product and category management for seamless navigation. React.js ensures a responsive and user-friendly interface, Node.js facilitates efficient server-side operations, and MongoDB offers a scalable database solution for storing customer, product, and order data. The project highlights the integration of these technologies and the challenges addressed, showcasing the effectiveness of modern web development tools in delivering streamlined e-commerce solutions.

### Installation :dart:

#### :hammer_and_wrench: Back-end:

1. **Download Node.js**:
    - Go to the [official Node.js download page](https://nodejs.org/en/download/package-manager).
    - Download the installer for your operating system.

2. Verify Installation

After installation, open a terminal or command prompt and run the following commands to verify that Node.js and npm (Node Package Manager) are installed:

```sh
node --version
npm --version
```

3. Run server
```sh
npm start
```
   
#### :art: Front-end:
1. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


2. Install neccessary Dependencies

```sh
npm install
```

3. Run client browser
   - Runs the app in the development mode.
   - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

```sh
npm run start
```



</div>

### Task Allocation :

| Order |                  Task                  |   Person   | Contribution (%) |
| :----: |:--------------------------------------:|:----------:|:----------------:|
| 1     | Back-end Developer, Database Developer | Kỳ Phương  |        25        |
| 2     |       Back-end Developer, Tester       | Hữu Nguyên |        25        |
| 3     |  UI/UX Developer, Front-end Developer  | Thanh Thủy |        25        |
| 4     |          Front-end Developer           |  Vạn Huy   |        25        |



<br />


## 2. Tech stack <a name="Tech_stack"></a>:joystick:
### :art:Front-end:
- Language: [JavaScript](https://www.javascript.com/), [HTML](https://www.w3schools.com/html/), [CSS](https://www.w3schools.com/css/)
- Framework: [React.js](https://reactjs.org/)
- Compiler: [Visual Studio Code](https://code.visualstudio.com/)
  <br />


### :hammer_and_wrench:Back-end:
- Language: [JavaScript](https://www.javascript.com/)
- Framework: [Node.js](https://nodejs.org/en/)
- Compiler: [Visual Studio Code](https://code.visualstudio.com/), [IntelliJ IDEA](https://www.jetbrains.com/idea/), [Postman](https://www.postman.com/)
- Database: [MongoDB Compass](https://www.mongodb.com/products/compass)
  <br />


## 3. Entity Relationship Diagram <a name="ERD"></a>:

![ERD](https://github.com/nguyensngoc108/Furnitech/blob/main/Furnitech_ERD.png)


## 4. Interface <a name="Interface"></a>:

### Login Interface:

<img src="https://github.com/nguyensngoc108/Furnitech/blob/main/Login.png" alt="Login"/>

### Register Interface:

<img src="https://github.com/nguyensngoc108/Furnitech/blob/main/Sign%20up.png" alt="Register"/>
<img src="https://github.com/nguyensngoc108/Furnitech/blob/main/Sign%20up%20-%20Password.png" alt="Register_Password"/>

### Home Interface:
<img src="https://github.com/nguyensngoc108/Furnitech/blob/main/Landing%20Page1.png" alt="Home1"/>
<img src="https://github.com/nguyensngoc108/Furnitech/blob/main/Landing%20Page2.png" alt="Home2"/>

### Product Interface:
<img src="https://github.com/nguyensngoc108/Furnitech/blob/main/Product%20Page.png" alt="Product"/>

### Cart Interface:
<img src="https://github.com/nguyensngoc108/Furnitech/blob/main/Cart.png" alt="Cart"/>

### Checkout Interface:
<img src="https://github.com/nguyensngoc108/Furnitech/blob/main/Checkout%20Sucessful.png" alt="Checkout"/>

<br />


<!-- CHALLENGES -->
## 5. Challenges <a name="Challenges"></a>
- Task allocation for each team member
- Using platform for communication between BackEnd and FrontEnd
  <br />



## 6. Acknowledgments<a name="Acknowledgments">:brain:
<div style="text-align:justify">
We express our sincere gratitude and appreciation to Assoc. Prof. Nguyen Van Sinh for his professional guidance. His unwavering encouragement and support were instrumental in helping our team achieve its goals.
We also extend our thanks to MSc. Nguyen Trung Nghia, a laboratory lecturer, whose technical assistance and good humor greatly enriched our learning experience this semester.

We would also like to express our sincere gratitude to the irreplaceable members of our group. Their technical expertise and collaborative spirit were essential to our progress. Beyond their willingness to share their knowledge and troubleshoot challenges, their good humor and positive attitudes made this project an enriching and enjoyable learning experience. We are grateful to have had the opportunity to work alongside such a talented and supportive team.
</div>
<br />


## 7. References<a name="References">:bookmark:
- [Node.js tutorial](https://www.w3schools.com/nodejs/)
- [React.js tutorial](https://www.w3schools.com/react/default.asp)
- [MongoDB tutorial](https://www.w3schools.com/nodejs/nodejs_mongodb.asp)
- [Express.js tutorial](https://www.w3schools.com/nodejs/nodejs_express.asp)
- [Mongoose tutorial](https://www.w3schools.com/nodejs/nodejs_mongodb.asp)
- [React Router tutorial](https://www.w3schools.com/react/react_router.asp)
  <br />

<p align="right">(<a href="#top">Back to top</a>)</p>
</div>


[contributors-shield]: https://img.shields.io/github/contributors/nguyensngoc108/Furnitech.svg?style=for-the-badge
[contributors-url]: https://github.com/nguyensngoc108/Furnitech/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/nguyensngoc108/Furnitech.svg?style=for-the-badge
[forks-url]: https://github.com/nguyensngoc108/Furnitech/network/members
[stars-shield]: https://img.shields.io/github/stars/nguyensngoc108/Furnitech.svg?style=for-the-badge
[stars-url]: https://github.com/nguyensngoc108/Furnitech/stargazers
[issues-shield]: https://img.shields.io/github/issues/nguyensngoc108/Furnitech.svg?style=for-the-badge
[issues-url]: https://github.com/nguyensngoc108/Furnitech/issues
