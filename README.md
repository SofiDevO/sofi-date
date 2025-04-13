# sofi-date

A simple and lightweight date formatting utility for Node.js.

## Description

sofi-date is a Node.js package that provides easy-to-use functions for formatting dates in standard formats. The package supports both international/Spanish (YYYY-MM-DD) and US (MM/DD/YYYY) date formats, with or without time.

## Installation

Install the package using npm:

```bash
npm install sofi-date
```

## Usage

### Basic Usage

```javascript
const { formatSimple, formatFull, formatUS, formatUSFull } = require('sofi-date');

// Current date in Spanish/International format (YYYY-MM-DD)
console.log(formatSimple());  // Output: 2025-04-12
console.log(formatFull());    // Output: 2025-04-12 19:50:16

// Current date in US format (MM/DD/YYYY)
console.log(formatUS());      // Output: 04/12/2025
console.log(formatUSFull());  // Output: 04/12/2025 19:50:16
```

### Format Specific Date

```javascript
const myDate = new Date('2023-01-15T10:30:45');

// Spanish/International format
console.log(formatSimple(myDate));  // Output: 2023-01-15
console.log(formatFull(myDate));    // Output: 2023-01-15 10:30:45

// US format
console.log(formatUS(myDate));      // Output: 01/15/2023
console.log(formatUSFull(myDate));  // Output: 01/15/2023 10:30:45
```

### Using formatWithLocale

The `formatWithLocale` function allows you to choose the format based on locale:

```javascript
const { formatWithLocale, FORMAT_TYPES } = require('sofi-date');

const myDate = new Date('2023-01-15T10:30:45');

// Spanish/International format (default)
console.log(formatWithLocale(myDate));                           // Output: 2023-01-15
console.log(formatWithLocale(myDate, FORMAT_TYPES.ES, false));   // Output: 2023-01-15
console.log(formatWithLocale(myDate, FORMAT_TYPES.ES, true));    // Output: 2023-01-15 10:30:45

// US format
console.log(formatWithLocale(myDate, FORMAT_TYPES.EN, false));   // Output: 01/15/2023
console.log(formatWithLocale(myDate, FORMAT_TYPES.EN, true));    // Output: 01/15/2023 10:30:45
```

### Different Input Types

```javascript
// Format from string
console.log(formatSimple('2023-05-20'));    // Output: 2023-05-20
console.log(formatUS('05/20/2023'));        // Output: 05/20/2023

// Format from timestamp
const timestamp = 1642237845000;  // 2022-01-15 10:30:45
console.log(formatSimple(timestamp));  // Output: 2022-01-15
console.log(formatUS(timestamp));      // Output: 01/15/2022
```

## API Reference

### Spanish/International Format Functions

#### formatSimple(date)

Formats a date as YYYY-MM-DD (Spanish/International format).

**Parameters:**

- `date` (optional): Date to format. Accepts:
  - A Date object
  - A date string (ISO format or MM/DD/YYYY format)
  - A timestamp (milliseconds since Unix epoch)
  - If not provided, uses the current date

**Returns:**

- String formatted as YYYY-MM-DD

#### formatFull(date)

Formats a date as YYYY-MM-DD HH:mm:ss (Spanish/International format with time).

**Parameters:**

- `date` (optional): Same as formatSimple

**Returns:**

- String formatted as YYYY-MM-DD HH:mm:ss

### US Format Functions

#### formatUS(date)

Formats a date as MM/DD/YYYY (US format).

**Parameters:**

- `date` (optional): Same as formatSimple

**Returns:**

- String formatted as MM/DD/YYYY

#### formatUSFull(date)

Formats a date as MM/DD/YYYY HH:mm:ss (US format with time).

**Parameters:**

- `date` (optional): Same as formatSimple

**Returns:**

- String formatted as MM/DD/YYYY HH:mm:ss

### Locale-based Formatting

#### formatWithLocale(date, locale, includeTime)

Formats a date according to the specified locale.

**Parameters:**

- `date` (optional): Same as formatSimple
- `locale` (optional): The locale to use for formatting:
  - `FORMAT_TYPES.ES` (or `'es'`) for Spanish/International format (YYYY-MM-DD)
  - `FORMAT_TYPES.EN` (or `'en'`) for US format (MM/DD/YYYY)
  - Default is `FORMAT_TYPES.ES`
- `includeTime` (optional): Whether to include time in the output (default: false)

**Returns:**

- String formatted according to the specified locale and time preference

### Constants

#### FORMAT_TYPES

An object containing format type constants:

- `FORMAT_TYPES.ES`: 'es' - Spanish/International format (YYYY-MM-DD)
- `FORMAT_TYPES.EN`: 'en' - US format (MM/DD/YYYY)

### Error Handling

All functions will throw an error if:
- The provided date parameter cannot be converted to a valid date
- An invalid locale is provided to formatWithLocale

## Author

Angela Sofia Osorio - SofiDev (contact@sofidev.top)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

