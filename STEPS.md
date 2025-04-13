# How sofi-date Works

This document explains the internal workings of the `sofi-date` package, which provides date formatting utilities with support for different locales.

## Overview

`sofi-date` is a Node.js package designed to format dates in different styles and languages. It offers two primary formatting functions:

1. `formateFull`: Provides a complete textual representation of a date (e.g., "March 17, 2025")
2. `formateShort`: Provides a shorter representation with an abbreviated month (e.g., "Mar/17/2025")

The package emphasizes locale-specific formatting, particularly for Spanish (es-ES) and English (en-US).

## Internal Workings

### Date Parsing

Both functions start by parsing the input date using JavaScript's native `Date` constructor:

```javascript
const gettingDate = new Date(date);
// or
const formatDate = new Date(date);
```

This allows the functions to accept various date formats as input, including:
- ISO date strings (e.g., "2025-03-17T22:17:15")
- Date objects
- Other date formats parseable by the JavaScript Date constructor

### formateFull Function

The `formateFull` function works through these steps:

1. **Date parsing**: Creates a JavaScript Date object from the input
   ```javascript
   const gettingDate = new Date(date);
   ```

2. **Locale detection**: Checks if the requested locale is Spanish (es-ES)
   ```javascript
   if (locale === "es-ES") {
     // Spanish-specific formatting
   } else {
     // Default formatting for other locales
   }
   ```

3. **For Spanish locale**:
   - Uses `Intl.DateTimeFormat` with the locale and formatting options
   - Breaks down the formatted date into parts using `formatToParts`
   - Capitalizes the month name (Spanish convention)
   - Joins all parts back together

4. **For other locales**:
   - Uses the standard `Intl.DateTimeFormat` formatting with locale-specific rules

### formateShort Function

The `formateShort` function follows these steps:

1. **Date parsing**: Creates a JavaScript Date object from the input
   ```javascript
   const formatDate = new Date(date);
   ```

2. **Extracts individual date components**:
   - Day: `formatDate.getDate()`
   - Month: Uses `toLocaleString` with the specified locale to get the month name
   - Abbreviates the month name to 3 characters and capitalizes it
   - Year: `formatDate.getFullYear()`

3. **Locale-specific formatting**:
   - For Spanish (es-ES): Returns in "day/month/year" format
   - For English (en-US): Returns in "month/day/year" format

## Locale Detection and Handling

The package uses conditional checks to handle locale-specific formatting:

```javascript
if (locale === "es-ES") {
  // Spanish formatting
} else if (locale === "en-US") {
  // US English formatting
} else {
  // Fallback formatting
}
```

Spanish (es-ES) receives special handling for capitalization of month names and ordering of date elements according to Spanish conventions.

## Date Manipulation Examples

### Example 1: Spanish Full Date Format

For the input `"2025-03-17T22:17:15"` with locale `"es-ES"`:

1. Parse the date string into a Date object
2. Create an Intl.DateTimeFormat instance with Spanish locale
3. Format the date to parts
4. Capitalize the first letter of the month name ("marzo" → "Marzo")
5. Join all parts to produce "17 de Marzo de 2025"

### Example 2: US Short Date Format

For the input `"2025-03-17T22:17:15"` with locale `"en-US"`:

1. Parse the date string into a Date object
2. Extract the day (17)
3. Get the localized month name and abbreviate it to 3 characters ("March" → "Mar")
4. Extract the year (2025)
5. Arrange in US format: "Mar/17/2025"

## Internationalization (i18n) Support

The package leverages JavaScript's built-in `Intl` API for internationalization support, which provides:

- Language-sensitive date formatting
- Proper handling of language-specific patterns and conventions
- Support for multiple locales

By using native browser APIs, the package avoids the overhead of adding external dependencies for internationalization functionality.

