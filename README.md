# File Downloader!

Hi! This is an application that lets you download data from backend server into a CSV file on click of a button.

# Purpose
This application is developed to pass an interview test.

# Technical Stack
- NodeJS
- Angular 6

# Instructions 
#### Locally:
1. Ensure you have node installed on your system
2. Switch to the root directory where we have server.js 
3. Run the command npm install
4. Run the command node server.js
5. This will run the NodeJS server code on port 3000
6. Switch to the front-end directory where we have angular.json
7. Run the command npm install
8. Run the command npm start
9. This will run the Angular client code on port 4200
10. Enter http://localhost:4200 on your browser to see the download button
#### Docker:
1. Ensure you have Docker installed on your system
2. Switch to the root directory where we have server.js 
3. Run the command docker build -t node-web-app .
4. Run the command docker run -p 3000:3000 -d node-web-app
5. This will run the NodeJS server code on port 3000
6. Switch to the front-end directory where we have angular.json
7. Run the command docker build -t angular-client-app .
8. Run the command docker run -p 4200:4200 -d node-web-app
9. This will run the Angular client code on port 4200
10. Enter http://localhost:4200 on your browser to see the download button
	a. Intro to Pandas
