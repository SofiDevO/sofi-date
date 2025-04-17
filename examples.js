const {
  format,
  formatDate,
  formatDateTime,
  formatLong,
  formatFull,
  formatFullDateTime
} = require('./index');

// Helper function to print section headers
function printSection(title) {
  console.log('\n' + '='.repeat(60));
  console.log(' '.repeat(15) + title);
  console.log('='.repeat(60));
}

// Helper function to print formatted output
function printExample(label, result) {
  console.log(`${label.padEnd(35)}: ${result}`);
}

// Using a fixed date for consistent examples
const exampleDate = new Date(2023, 5, 15, 14, 30, 45); // June 15, 2023, 14:30:45

// ---------------------------------------------------------------
// 1. Basic usage with different locales
// ---------------------------------------------------------------
printSection('Basic Usage with Different Locales');

// Using the current date with default parameters
printExample('Current date (default)', formatDate());

// Format the example date with different locales
printExample('English (en)', formatDate(exampleDate, 'en'));
printExample('Spanish (es)', formatDate(exampleDate, 'es'));
printExample('French (fr)', formatDate(exampleDate, 'fr'));
printExample('German (de)', formatDate(exampleDate, 'de'));
printExample('Italian (it)', formatDate(exampleDate, 'it'));
printExample('Japanese (ja)', formatDate(exampleDate, 'ja'));
printExample('Portuguese (pt)', formatDate(exampleDate, 'pt'));
printExample('Russian (ru)', formatDate(exampleDate, 'ru'));
printExample('Chinese (zh)', formatDate(exampleDate, 'zh'));
printExample('Arabic (ar)', formatDate(exampleDate, 'ar'));

// ---------------------------------------------------------------
// 2. Different Format Styles
// ---------------------------------------------------------------
printSection('Different Format Styles');

// Simple format (numeric)
printExample('Simple format (en)', formatDate(exampleDate, 'en', 'simple'));
printExample('Simple format (es)', formatDate(exampleDate, 'es', 'simple'));

// Long format (with month name)
printExample('Long format (en)', formatDate(exampleDate, 'en', 'long'));
printExample('Long format (es)', formatDate(exampleDate, 'es', 'long'));
printExample('Long format (fr)', formatDate(exampleDate, 'fr', 'long'));
printExample('Long format (de)', formatDate(exampleDate, 'de', 'long'));

// Full format (with weekday and month name)
printExample('Full format (en)', formatDate(exampleDate, 'en', 'full'));
printExample('Full format (es)', formatDate(exampleDate, 'es', 'full'));
printExample('Full format (fr)', formatDate(exampleDate, 'fr', 'full'));
printExample('Full format (de)', formatDate(exampleDate, 'de', 'full'));

// ---------------------------------------------------------------
// 3. Date and DateTime Formatting
// ---------------------------------------------------------------
printSection('Date and DateTime Formatting');

// Date only (formatDate)
printExample('Date only (simple, en)', formatDate(exampleDate, 'en', 'simple'));
printExample('Date only (long, en)', formatDate(exampleDate, 'en', 'long'));
printExample('Date only (full, en)', formatDate(exampleDate, 'en', 'full'));

// Date with time (formatDateTime)
printExample('Date with time (simple, en)', formatDateTime(exampleDate, 'en', 'simple'));
printExample('Date with time (full, en)', formatDateTime(exampleDate, 'en', 'full'));
printExample('Date with time (simple, es)', formatDateTime(exampleDate, 'es', 'simple'));
printExample('Date with time (full, es)', formatDateTime(exampleDate, 'es', 'full'));

// Using convenience functions
printExample('formatLong (en)', formatLong(exampleDate, 'en'));
printExample('formatFull (en)', formatFull(exampleDate, 'en'));
printExample('formatFullDateTime (en)', formatFullDateTime(exampleDate, 'en'));

// ---------------------------------------------------------------
// 4. Using Different Input Types
// ---------------------------------------------------------------
printSection('Using Different Input Types');

// Date object
printExample('Date object', formatDate(new Date(2023, 5, 15), 'en'));

// Timestamp (milliseconds since epoch)
const timestamp = exampleDate.getTime();
printExample('Timestamp', formatDate(timestamp, 'en'));

// ISO date string
printExample('ISO date string', formatDate('2023-06-15', 'en'));

// Date string in other formats
printExample('Date string (MM/DD/YYYY)', formatDate('06/15/2023', 'en'));

// ---------------------------------------------------------------
// 5. Locale Variants
// ---------------------------------------------------------------
printSection('Locale Variants');

// English variants
printExample('English (US) - en-US', formatDate(exampleDate, 'en-US'));
printExample('English (GB) - en-GB', formatDate(exampleDate, 'en-GB'));
printExample('English (CA) - en-CA', formatDate(exampleDate, 'en-CA'));
printExample('English (AU) - en-AU', formatDate(exampleDate, 'en-AU'));

// Spanish variants
printExample('Spanish (Spain) - es-ES', formatDate(exampleDate, 'es-ES'));
printExample('Spanish (Mexico) - es-MX', formatDate(exampleDate, 'es-MX'));
printExample('Spanish (Argentina) - es-AR', formatDate(exampleDate, 'es-AR'));

// Date & time with locale variants
printExample('DateTime US format', formatDateTime(exampleDate, 'en-US'));
printExample('DateTime UK format', formatDateTime(exampleDate, 'en-GB'));
printExample('DateTime Spanish format', formatDateTime(exampleDate, 'es-ES'));

// ---------------------------------------------------------------
// 6. Core format Function (Advanced Usage)
// ---------------------------------------------------------------
printSection('Core format Function (Advanced Usage)');

// Basic usage
printExample('Default options', format(exampleDate, 'en'));

// With various options
printExample('With time, simple style', format(exampleDate, 'en', { includeTime: true, style: 'simple' }));
printExample('With time, full style', format(exampleDate, 'es', { includeTime: true, style: 'full' }));

// Customize for different locales
printExample('German, long style', format(exampleDate, 'de', { style: 'long' }));
printExample('French, full style with time', format(exampleDate, 'fr', { includeTime: true, style: 'full' }));

// ---------------------------------------------------------------
// 7. Error Handling
// ---------------------------------------------------------------
printSection('Error Handling');

// Invalid date handling
try {
  const result = formatDate('not-a-date', 'en');
  printExample('Invalid date', 'This should not display');
} catch (error) {
  printExample('Invalid date error', error.message);
}

// Invalid locale (falls back to 'en')
const resultInvalidLocale = formatDate(exampleDate, 'invalid-locale');
printExample('Invalid locale (fallback)', resultInvalidLocale);

// ---------------------------------------------------------------
// 8. Real-World Use Cases
// ---------------------------------------------------------------
printSection('Real-World Use Cases');

// Blog post dates
printExample('Blog post date (en)', formatLong(exampleDate, 'en'));
printExample('Blog post date (es)', formatLong(exampleDate, 'es'));

// Event dates with weekday
printExample('Event date (en)', formatFull(exampleDate, 'en'));
printExample('Event date (fr)', formatFull(exampleDate, 'fr'));

// Meeting schedule with time
printExample('Meeting (en)', formatFullDateTime(exampleDate, 'en'));
printExample('Meeting (de)', formatFullDateTime(exampleDate, 'de'));

// Compact date for tables/lists
printExample('Table date (en)', formatDate(exampleDate, 'en', 'simple'));
printExample('Table date (ja)', formatDate(exampleDate, 'ja', 'simple'));

console.log('\n✨ Use these examples as a guide to customize date formatting in your application! ✨');

