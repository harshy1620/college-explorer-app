# college-explorer-app
College Explorer App
Description
The College Explorer App is a web application built with React that allows users to explore a list of colleges. Users can view college details such as ratings, placement percentages, fees, and more. They can also sort the college list based on different criteria and search for colleges by name. Additionally, the app includes infinite scroll functionality for seamless browsing.

Features
View a list of colleges with detailed information.
Sort colleges by rating, fees, and other criteria in ascending or descending order.
Search for colleges by name.
Infinite scroll for continuous browsing experience.
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/college-explorer-app.git
Navigate to the project directory:
bash
Copy code
cd college-explorer-app
Install dependencies:
Copy code
npm install
Usage
Start the development server:
sql
Copy code
npm start
Open your browser and navigate to http://localhost:3000 to view the app.
Dependencies
React: v17.0.2
React Router: v6.2.2
Axios: v0.24.0
Material-UI: v5.3.0
React Infinite Scroll Component: v6.5.0
Folder Structure
kotlin
Copy code
college-explorer-app/
│
├── public/
└── src/
    ├── components/
    │   ├── CollegeList.js
    │   ├── CollegeCard.js
    │   ├── SortOptions.js
    │   ├── SearchBar.js
    │   └── InfiniteScroll.js
    ├── data/
    │   └── collegesData.js
    ├── App.js
    ├── index.js
    └── ...
Contributing
Fork the repository.
Create a new branch (git checkout -b feature/my-feature).
Make your changes and commit them (git commit -am 'Add new feature').
Push to the branch (git push origin feature/my-feature).
Create a new Pull Request.
License
This project is licensed under the MIT License - see the LICENSE.md file for details.
