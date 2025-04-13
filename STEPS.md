# Building and Publishing sofi-date: A Step-by-Step Guide

This document explains how we built the **sofi-date** package from start to finish. If you're new to programming, don't worry! I've tried to explain everything in simple terms.

## 1. What is sofi-date?

**sofi-date** is a simple JavaScript package that helps format dates in two ways:
- **Simple format** (YYYY-MM-DD): Example: 2025-04-12
- **Full format** (YYYY-MM-DD HH:mm:ss): Example: 2025-04-12 20:00:09

Think of it as a helpful tool that takes dates (which can be confusing in JavaScript) and converts them into easy-to-read text formats.

## 2. Setting Up the Project

### Creating the Package

When creating a JavaScript package, we start by setting up the basic structure:

1. **Create a new directory (folder)** for your project:
   ```bash
   mkdir sofi-date
   cd sofi-date
   ```

2. **Initialize the package** using npm (Node Package Manager):
   ```bash
   npm init
   ```
   
   This creates a `package.json` file, which is like an ID card for your package. It contains important information like:
   - Package name: "sofi-date"
   - Version: "1.0.0"
   - Description: "Date formatter for Node.js"
   - Author: "Angela Sofia Osorio - SofiDev"

3. **Install dependencies** (other packages your code needs):
   ```bash
   npm install isnumber
   ```
   
   We use the `isnumber` package to help us check if a value is a number. This is like adding a tool to your toolbox that you'll use later.

## 3. Writing the Code

### File Structure

We created these main files:
- `index.js`: The main code file
- `README.md`: Documentation for users
- `test.js`: Code to test our functions

### Understanding index.js

Here's what our code does, explained simply:

```javascript
// Import the isnumber tool to help check if values are numbers
const isNumber = require('isnumber');

// First function: Format date as YYYY-MM-DD
function formatSimple(date = new Date()) {
  // Convert the input to a proper date object
  const dateObj = ensureDate(date);
  
  // Get the year, month, and day
  const year = dateObj.getFullYear();
  // Month is 0-11 in JavaScript, so add 1
  // padStart adds a zero if needed (e.g., turns 4 into 04)
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  
  // Combine them with hyphens
  return `${year}-${month}-${day}`;
}

// Second function: Format date as YYYY-MM-DD HH:mm:ss
function formatFull(date = new Date()) {
  // Convert the input to a proper date object
  const dateObj = ensureDate(date);
  
  // Get the date part using our first function
  const datePart = formatSimple(dateObj);
  // Get hours, minutes, seconds and format with padding
  const hours = String(dateObj.getHours()).padStart(2, '0');
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');
  const seconds = String(dateObj.getSeconds()).padStart(2, '0');
  
  // Combine date and time
  return `${datePart} ${hours}:${minutes}:${seconds}`;
}

// Helper function to make sure we're working with a valid date
function ensureDate(input) {
  // If it's already a Date object, we're good
  if (input instanceof Date) {
    return input;
  }
  
  // If it's a string like "2022-12-25"
  if (typeof input === 'string') {
    // Check if it's just a date without time (YYYY-MM-DD)
    const dateOnlyRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (dateOnlyRegex.test(input)) {
      // Parse it carefully to prevent timezone issues
      const [year, month, day] = input.split('-').map(Number);
      const dateObj = new Date(year, month - 1, day);
      if (isNaN(dateObj.getTime())) {
        throw new Error('Invalid date provided');
      }
      return dateObj;
    }
    
    // Handle other string formats
    const dateObj = new Date(input);
    if (isNaN(dateObj.getTime())) {
      throw new Error('Invalid date provided');
    }
    return dateObj;
  }
  
  // If it's a number (timestamp)
  if (isNumber(input) && !isNaN(input)) {
    const dateObj = new Date(input);
    if (isNaN(dateObj.getTime())) {
      throw new Error('Invalid date provided');
    }
    return dateObj;
  }
  
  // If we get here, the input isn't valid
  throw new Error('Invalid date format. Please provide a valid Date, timestamp, or date string');
}

// Make the functions available to other code that uses our package
module.exports = {
  formatSimple,
  formatFull
};
```

### Why This Approach?

- We designed the code to be **flexible**, accepting different types of date inputs
- We added **error handling** to provide helpful messages if something goes wrong
- We fixed a common timezone issue when parsing date strings
- We made the code **reusable** by splitting it into separate functions

## 4. Testing Our Code

### Creating Tests

Testing is important to make sure our code works as expected. We created a `test.js` file that:

1. Tests formatting the current date
2. Tests formatting a specific date object
3. Tests formatting date strings
4. Tests formatting timestamps
5. Tests error cases to make sure errors are handled properly

Here's a simplified look at our tests:

```javascript
// Import our functions
const { formatSimple, formatFull } = require('./index');

// Test current date formatting
console.log('Current date (formatSimple):', formatSimple());
console.log('Current date (formatFull):', formatFull());

// Test with a specific date
const testDate = new Date('2023-05-15T14:30:45');
console.log('Date object result:', formatSimple(testDate)); // Should be: 2023-05-15
console.log('Date object result:', formatFull(testDate));   // Should be: 2023-05-15 14:30:45

// Test with a date string
console.log('String date result:', formatSimple('2022-12-25')); // Should be: 2022-12-25

// Test with a timestamp (milliseconds since Jan 1, 1970)
console.log('Timestamp result:', formatSimple(1672531200000)); 

// Test error cases
try {
  formatSimple('not-a-date'); // This should fail
} catch (error) {
  console.log('Error caught correctly:', error.message);
}
```

### Running Tests

We set up a simple command to run the tests:

1. Added a test script in `package.json`:
   ```json
   "scripts": {
     "test": "node test.js"
   }
   ```

2. Run the tests with:
   ```bash
   npm test
   ```

During testing, we discovered and fixed a timezone issue with date-only strings.

## 5. Publishing to npm

### Preparing for Publication

Before publishing, we needed to:

1. **Create a `.npmignore` file** to exclude unnecessary files:
   ```
   test.js
   .git
   .gitignore
   node_modules
   npm-debug.log
   ```

2. **Make sure our README.md** is complete with:
   - Installation instructions
   - Usage examples
   - API reference
   - Author information
   - License information

### Publishing Process

1. **Log in to npm**:
   ```bash
   npm login
   ```
   This asks for your npm username, password, and may require a one-time password.

2. **Check if the package name is available**:
   ```bash
   npm search sofi-date
   ```

3. **Publish the package**:
   ```bash
   npm publish
   ```

After publishing, our package became available at: https://www.npmjs.com/package/sofi-date

Anyone can now install it using:
```bash
npm install sofi-date
```

## 6. GitHub Setup

### Setting Up Git Repository

1. **Initialize a Git repository**:
   ```bash
   git init
   ```

2. **Add all files to Git**:
   ```bash
   git add .
   ```

3. **Create the first commit**:
   ```bash
   git commit -m "Initial commit: First version of sofi-date package"
   ```

4. **Connect to GitHub repository**:
   ```bash
   git remote add origin git@gh-sofidev:SofiDevO/sofi-date.git
   ```

5. **Set the branch name to "main"**:
   ```bash
   git branch -M main
   ```

6. **Push code to GitHub**:
   ```bash
   git push -u origin main
   ```

Now the code is:
- Published on npm for others to use
- Available on GitHub for collaboration and open-source contributions

## 7. What We Learned

Through this project, we:
1. Created a reusable JavaScript package
2. Wrote code that handles different types of inputs
3. Fixed a common timezone issue in JavaScript dates
4. Learned how to test code properly
5. Published a package to npm
6. Set up a GitHub repository for version control

## 8. Next Steps

If you want to continue improving this package, you could:
1. Add more date formatting options
2. Add TypeScript definitions for better editor support
3. Set up automated testing with GitHub Actions
4. Add more detailed documentation and examples

---

I hope this guide helps you understand how JavaScript packages are built and published! If you have any questions, feel free to open an issue on GitHub.

