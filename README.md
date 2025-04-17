# sofi-date

[![npm version](https://img.shields.io/npm/v/sofi-date.svg)](https://www.npmjs.com/package/sofi-date)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A flexible, lightweight date formatting library for Node.js with multi-language support. Format dates in any locale with simple, customizable options.

## 🌟 Features

- **Simple API** with intuitive parameters
- **Multiple format styles** (simple, long, full)
- **Support for any locale** (en, es, fr, de, ja, zh, etc.)
- **Date-only and date-time formatting**
- **Default parameters** for quick usage
- **Error handling** with helpful messages
- **Zero dependencies**

## 📦 Installation

```bash
npm install sofi-date
```

## 🚀 Quick Start

```javascript
const { formatDate, formatDateTime, formatLong, formatFull } = require('sofi-date');

// Current date in different locales
console.log(formatDate());                  // 04/17/2025 (default)
console.log(formatDate(new Date(), 'es'));  // 17/04/2025 (Spanish)
console.log(formatDate(new Date(), 'fr'));  // 17/04/2025 (French)

// Different format styles
console.log(formatLong(new Date(), 'en'));  // April 17, 2025
console.log(formatFull(new Date(), 'es'));  // jueves, 17 de abril de 2025

// With time
console.log(formatDateTime(new Date(), 'en'));  // 04/17/2025, 11:16:36
```

## 📚 API Documentation

### Core Function

#### `format(date, locale, options)`

The main formatting function that all other functions use.

- **Parameters:**
  - `date` (Date|number|string, optional): Date to format. Defaults to current date.
  - `locale` (string, optional): Locale code (e.g., 'en', 'es'). Defaults to 'en'.
  - `options` (Object, optional): Formatting options.
    - `includeTime` (boolean): Whether to include time. Defaults to false.
    - `style` (string): Format style ('simple', 'long', 'full'). Defaults to 'simple'.

- **Returns:** Formatted date string

```javascript
const { format } = require('sofi-date');

// With default options
format(new Date());  // 04/17/2025

// With time and full style
format(new Date(), 'es', { includeTime: true, style: 'full' });  
// jueves, 17 de abril de 2025, 11:16:36
```

### Helper Functions

#### `formatDate(date, locale, style)`

Format a date without time.

- **Parameters:**
  - `date` (Date|number|string, optional): Date to format. Defaults to current date.
  - `locale` (string, optional): Locale code. Defaults to 'en'.
  - `style` (string, optional): Format style ('simple', 'long', 'full'). Defaults to 'simple'.

- **Returns:** Formatted date string

```javascript
const { formatDate } = require('sofi-date');

formatDate();  // 04/17/2025
formatDate(new Date(), 'es');  // 17/04/2025
formatDate(new Date(), 'en', 'long');  // April 17, 2025
```

#### `formatDateTime(date, locale, style)`

Format a date with time.

- **Parameters:**
  - `date` (Date|number|string, optional): Date to format. Defaults to current date.
  - `locale` (string, optional): Locale code. Defaults to 'en'.
  - `style` (string, optional): Format style ('simple', 'full'). Defaults to 'simple'.

- **Returns:** Formatted date and time string

```javascript
const { formatDateTime } = require('sofi-date');

formatDateTime();  // 04/17/2025, 11:16:36
formatDateTime(new Date(), 'es');  // 17/04/2025, 11:16:36
formatDateTime(new Date(), 'en', 'full');  // Thursday, April 17, 2025 at 11:16:36
```

#### `formatLong(date, locale)`

Format a date with month name (no weekday).

- **Parameters:**
  - `date` (Date|number|string, optional): Date to format. Defaults to current date.
  - `locale` (string, optional): Locale code. Defaults to 'en'.

- **Returns:** Formatted date string with month name

```javascript
const { formatLong } = require('sofi-date');

formatLong();  // April 17, 2025
formatLong(new Date(), 'es');  // 17 de abril de 2025
```

#### `formatFull(date, locale)`

Format a date with weekday and month name.

- **Parameters:**
  - `date` (Date|number|string, optional): Date to format. Defaults to current date.
  - `locale` (string, optional): Locale code. Defaults to 'en'.

- **Returns:** Formatted date string with weekday and month name

```javascript
const { formatFull } = require('sofi-date');

formatFull();  // Thursday, April 17, 2025
formatFull(new Date(), 'es');  // jueves, 17 de abril de 2025
```

#### `formatFullDateTime(date, locale)`

Format a date and time with weekday and month name.

- **Parameters:**
  - `date` (Date|number|string, optional): Date to format. Defaults to current date.
  - `locale` (string, optional): Locale code. Defaults to 'en'.

- **Returns:** Formatted date and time string with weekday and month name

```javascript
const { formatFullDateTime } = require('sofi-date');

formatFullDateTime();  // Thursday, April 17, 2025 at 11:16:36
formatFullDateTime(new Date(), 'es');  // jueves, 17 de abril de 2025, 11:16:36
```

## 🌎 Locale Support

The library supports any valid locale code using JavaScript's native `Intl` API. Some examples:

| Code | Language | Example Output |
|------|----------|---------------|
| 'en' | English | April 17, 2025 |
| 'es' | Spanish | 17 de abril de 2025 |
| 'fr' | French | 17 avril 2025 |
| 'de' | German | 17. April 2025 |
| 'it' | Italian | 17 aprile 2025 |
| 'ja' | Japanese | 2025年4月17日 |
| 'pt' | Portuguese | 17 de abril de 2025 |
| 'ru' | Russian | 17 апреля 2025 г. |
| 'zh' | Chinese | 2025年4月17日 |
| 'ar' | Arabic | ١٧ أبريل ٢٠٢٥ |

You can also use country-specific locale codes like 'en-US', 'en-GB', 'es-ES', 'es-MX', etc.

## 📋 Examples

### Different Locales

```javascript
const { formatLong } = require('sofi-date');
const birthday = new Date(1990, 0, 15);  // January 15, 1990

console.log(formatLong(birthday, 'en'));  // January 15, 1990
console.log(formatLong(birthday, 'es'));  // 15 de enero de 1990
console.log(formatLong(birthday, 'fr'));  // 15 janvier 1990
console.log(formatLong(birthday, 'de'));  // 15. Januar 1990
console.log(formatLong(birthday, 'ja'));  // 1990年1月15日
```

### Format Styles

```javascript
const { formatDate } = require('sofi-date');
const meeting = new Date(2023, 5, 15);  // June 15, 2023

// Simple style (numeric)
console.log(formatDate(meeting, 'en', 'simple'));  // 06/15/2023

// Long style (with month name)
console.log(formatDate(meeting, 'en', 'long'));  // June 15, 2023

// Full style (with weekday and month name)
console.log(formatDate(meeting, 'en', 'full'));  // Thursday, June 15, 2023
```

### Date and Time Formatting

```javascript
const { formatDate, formatDateTime, formatFullDateTime } = require('sofi-date');
const call = new Date(2023, 5, 15, 14, 30, 0);  // June 15, 2023, 14:30:00

// Date only
console.log(formatDate(call, 'en'));  // 06/15/2023

// Date and time
console.log(formatDateTime(call, 'en'));  // 06/15/2023, 14:30:00

// Full date and time
console.log(formatFullDateTime(call, 'en'));  // Thursday, June 15, 2023 at 14:30:00
```

### Error Handling

```javascript
const { formatDate } = require('sofi-date');

try {
  // This will throw an error
  const result = formatDate('not a valid date', 'en');
  console.log(result);
} catch (error) {
  console.error('Error:', error.message);
  // Output: Error: Invalid date: not a valid date. Could not parse into a valid date.
}

// Invalid locales will fall back to 'en'
const result = formatDate(new Date(), 'invalid-locale');
console.log(result);  // 04/17/2025
```

## 📊 Real-World Use Cases

### Blog Post Dates

```javascript
const { formatLong } = require('sofi-date');

const publishDate = new Date(2023, 2, 15);  // March 15, 2023
console.log(`Published on ${formatLong(publishDate, 'en')}`);
// Published on March 15, 2023
```

### Event Calendar

```javascript
const { formatFull, formatDateTime } = require('sofi-date');

const event = new Date(2023, 6, 4, 18, 30);  // July 4, 2023, 18:30
console.log(`Event: ${formatFull(event, 'en')}`);
// Event: Tuesday, July 4, 2023
console.log(`Starts at: ${formatDateTime(event, 'en')}`);
// Starts at: 07/04/2023, 18:30:00
```

### International Application

```javascript
const { formatFullDateTime } = require('sofi-date');

const userMeeting = new Date(2023, 5, 15, 14, 30);  // June 15, 2023, 14:30
const userLocale = getUserLocale();  // e.g., 'fr', 'de', 'ja'

console.log(`Your meeting is scheduled for: ${formatFullDateTime(userMeeting, userLocale)}`);
// French: Votre réunion est prévue pour: jeudi 15 juin 2023 à 14:30:00
```

## 📜 License

MIT © [Angela Sofia Osorio - SofiDev](https://github.com/SofiDevO)

# sofi-date

[![npm version](https://img.shields.io/npm/v/sofi-date.svg)](https://www.npmjs.com/package/sofi-date)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

A flexible date formatter for Node.js with support for both international (YYYY-MM-DD) and US (MM/DD/YYYY) formats. Easily format dates in different languages and styles.

## Installation

```bash
npm install sofi-date
```

## Usage

```javascript
const { formateFull, formateShort } = require('sofi-date');

// Full date formatting
console.log(formateFull("2025-03-17T22:17:15", "es-ES")); // "17 de Marzo de 2025"
console.log(formateFull("2025-03-17T22:17:15", "en-US")); // "March 17, 2025"

// Short date formatting
console.log(formateShort("2025-03-17T22:17:15", "es-ES")); // "17/Mar/2025"
console.log(formateShort("2025-03-17T22:17:15", "en-US")); // "Mar/17/2025"

```

## Supported Locales

Currently, the library fully supports the following locales:

- `es-ES` (Spanish)
- `en-US` (English - United States)

Other locales may work but have not been specifically tested or optimized.

## API Reference

### formateFull(date, locale)

Formats a date into its full text representation based on the specified locale.

**Parameters:**
- `date` (String|Date): The date to format. Can be a Date object or a string parseable by the Date constructor.
- `locale` (String): The locale to use for formatting (e.g., "es-ES", "en-US").

**Returns:**
- (String): The formatted date string in full text format.

**Examples:**
```javascript
formateFull("2025-03-17", "es-ES"); // "17 de Marzo de 2025"
formateFull("2025-03-17", "en-US"); // "March 17, 2025"
```

### formateShort(date, locale)

Formats a date into a short representation with abbreviated month name.

**Parameters:**
- `date` (String|Date): The date to format. Can be a Date object or a string parseable by the Date constructor.
- `locale` (String): The locale to use for formatting (e.g., "es-ES", "en-US").

**Returns:**
- (String): The formatted date string in abbreviated format.
**Examples:**
```javascript
formateShort("2025-03-17", "es-ES"); // "17/Mar/2025"
formateShort("2025-03-17", "en-US"); // "Mar/17/2025"
```

## Support Development ☕
[![GitHub Sponsors](https://img.shields.io/badge/Sponsor-%E2%9D%A4%EF%B8%8F-29036b?logo=githubsponsors)](https://github.com/sponsors/SofiDevO?o=esb)
[![Ko-fi](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-29036b?logo=kofi)](https://ko-fi.com/sofidev)

---

**MIT Licensed** | [Full Documentation](https://github.com/SofiDevO/sofi-date)
