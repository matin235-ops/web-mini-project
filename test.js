const fs = require('fs');
const path = require('path');

// Check if essential files exist
const essentialFiles = [
    'index.html',
    'about.html',
    'contact.html',
    'details.html',
    'assets/js/script.js',
    'assets/css/styles.css',
    'assets/data/data.json'
];

let allFilesExist = true;

essentialFiles.forEach(file => {
    if (!fs.existsSync(path.join(__dirname, file))) {
        console.error(`Missing essential file: ${file}`);
        allFilesExist = false;
    }
});

if (allFilesExist) {
    console.log('All essential files exist. Tests passed!');
    process.exit(0); // Success
} else {
    console.error('Tests failed: Missing essential files');
    process.exit(1); // Failure
}