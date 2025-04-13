# sofi-date

[![npm version](https://img.shields.io/npm/v/sofi-date.svg)](https://www.npmjs.com/package/sofi-date)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A flexible date formatter for Node.js with support for both international (YYYY-MM-DD) and US (MM/DD/YYYY) formats. Easily format dates in different languages and styles.

## Installation

```bash
npm install sofi-date
```

## Usage

```javascript
const { formateFull, formateShort } = require('sofi-date');

// Full date formatting
console.log(formateFull("2025-03-17T22:17:15", "es-ES")); // 17 de Marzo de 2025
console.log(formateFull("2025-03-17T22:17:15", "en-US")); // March 17, 2025

// Short date formatting
console.log(formateShort("2025-03-17T22:17:15", "es-ES")); // 17/Mar/2025
console.log(formateShort("2025-03-17T22:17:15", "en-US")); // Mar/17/2025
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
formateShort("2025-03-17", "en-US"); // "Mar/17/2025"
```

## Support Development ☕
[![GitHub Sponsors](https://img.shields.io/badge/Sponsor-%E2%9D%A4%EF%B8%8F-ea4aaa?logo=githubsponsors)](https://github.com/sponsors/SofiDevO?o=esb)
[![Ko-fi](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ff5e5b?logo=kofi)](https://ko-fi.com/sofidev)

---

**MIT Licensed** | [Full Documentation](https://github.com/SofiDevO/sofi-date)

## License

MIT © [Angela Sofia Osorio - SofiDev](https://github.com/SofiDevO)

