# sofi-date

A simple and lightweight date formatting utility for Node.js.

## Description

sofi-date is a Node.js package that provides easy-to-use functions for formatting dates in standard formats. The package offers two main formatting options: simple date (YYYY-MM-DD) and full date-time (YYYY-MM-DD HH:mm:ss).

## Installation

Install the package using npm:

```bash
npm install sofi-date
```

## Usage

```javascript
const { formatSimple, formatFull } = require('sofi-date');

// Format current date
console.log(formatSimple());  // Output: 2025-04-12 (current date)
console.log(formatFull());    // Output: 2025-04-12 19:50:16 (current date and time)

// Format specific date
const myDate = new Date('2023-01-15T10:30:45');
console.log(formatSimple(myDate));  // Output: 2023-01-15
console.log(formatFull(myDate));    // Output: 2023-01-15 10:30:45

// Format from string
console.log(formatSimple('2023-05-20'));  // Output: 2023-05-20
console.log(formatFull('2023-05-20'));    // Output: 2023-05-20 00:00:00

// Format from timestamp
const timestamp = 1642237845000;  // 2022-01-15 10:30:45
console.log(formatSimple(timestamp));  // Output: 2022-01-15
console.log(formatFull(timestamp));    // Output: 2022-01-15 10:30:45
```

## API Reference

### formatSimple(date)

Formats a date as YYYY-MM-DD.

**Parameters:**

- `date` (optional): Date to format. Accepts:
  - A Date object
  - A date string (ISO format recommended)
  - A timestamp (milliseconds since Unix epoch)
  - If not provided, uses the current date

**Returns:**

- String formatted as YYYY-MM-DD

### formatFull(date)

Formats a date as YYYY-MM-DD HH:mm:ss.

**Parameters:**

- `date` (optional): Date to format. Accepts:
  - A Date object
  - A date string (ISO format recommended)
  - A timestamp (milliseconds since Unix epoch)
  - If not provided, uses the current date

**Returns:**

- String formatted as YYYY-MM-DD HH:mm:ss

### Error Handling

Both functions will throw an error if the provided date parameter cannot be converted to a valid date.

## Author

Angela Sofia Osorio - SofiDev (contact@sofidev.top)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

