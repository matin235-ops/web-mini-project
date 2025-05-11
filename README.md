# Name : Matin Khalid
# Web Mini Project

## Overview
This project is a simple web application that dynamically displays content using HTML, CSS, JavaScript, and JSON data. The application fetches data from a JSON file and renders it on the web page, allowing for a dynamic and interactive user experience.

## Project Structure
```
web-mini-project
├── assets
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   └── script.js
│   └── data
│       └── data.json
├── index.html
└── README.md
```

## Files Description
- **index.html**: Contains the basic HTML structure and links to the CSS and JavaScript files. It includes a container element (`<div id="data-container">`) for displaying dynamic content.
  
- **assets/css/styles.css**: Contains styles for the web page, ensuring a visually appealing layout and responsive design.

- **assets/js/script.js**: Implements functionality to fetch data from `data.json`, parse it, and dynamically create HTML elements to display the information. It also includes error handling for network requests.

- **assets/data/data.json**: Contains structured JSON data as an array of objects, where each object represents an item with properties such as id, title, author/director, description, and image.

## Setup Instructions
1. Clone the repository or download the project files.
2. Open `index.html` in a web browser to view the application.
3. Ensure that the JSON data in `data.json` is correctly formatted to be displayed by the JavaScript code.

## Additional Information
- This project can be expanded by adding more features, such as filtering or sorting the displayed content.
- Ensure that your browser allows fetching local JSON files, or consider running a local server for testing.
