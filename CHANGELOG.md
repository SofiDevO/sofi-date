# Changelog

All notable changes to the `sofi-date` package will be documented in this file.

## [4.0.0] - 2025-04-17

### 🚀 Major Changes

- **Complete rewrite using JavaScript's native date formatting capabilities**
- **Flexible locale support for any valid locale code** (e.g., 'en', 'es', 'fr', 'de', 'ja', etc.)
- **Simplified API with consistent parameter ordering** (date, locale, options)
- **Added multiple format styles** (simple, long, full)
- **Support for date-only and date-time formatting**
- **Improved error handling with helpful messages**

### ✨ New Features

- New core `format()` function with flexible options
- Helper functions for common formatting needs:
  - `formatDate()` - Format date only
  - `formatDateTime()` - Format date with time
  - `formatLong()` - Format with month name
  - `formatFull()` - Format with weekday and month name
  - `formatFullDateTime()` - Format date and time with weekday and month name
- Support for all major locale variants (e.g., 'en-US', 'en-GB', 'es-ES', 'es-MX')
- Comprehensive documentation and examples

### 💥 Breaking Changes

- **API changes:** Function signatures and parameters have changed
- **Removed `FORMAT_TYPES` constant** - use locale codes directly
- **Default locale is now 'en'** instead of locale-specific constants

### 🧰 Migration from v3.x

Replace:
```javascript
const { formatSimple, formatUS, FORMAT_TYPES } = require('sofi-date');

formatSimple(date);  // YYYY-MM-DD
formatUS(date);      // MM/DD/YYYY
formatWithLocale(date, FORMAT_TYPES.ES, true, 'language');
```

With:
```javascript
const { formatDate, formatDateTime, formatLong } = require('sofi-date');

formatDate(date, 'en');            // MM/DD/YYYY (or locale default)
formatDate(date, 'es');            // DD/MM/YYYY (or locale default)
formatDateTime(date, 'es', 'full'); // Full date with time in Spanish
```

## [3.0.1] - Prior to rewrite

- Original implementation with separate functions for different format types
- Limited locale support
- Fixed format styles

# Changelog

All notable changes to the sofi-date package will be documented in this file.

## [3.0.1] - 2025-04-12

### Fixed
- Fixed timezone handling for YYYY-MM-DD date strings
- Improved date parsing accuracy across different formats
- All formatting functions now correctly handle timezone conversions
- Enhanced test coverage with passing test cases
## [2.0.1] - 2025-04-12

### Fixed
- Added proper `module.exports` statement for better CommonJS compatibility
- Improved README examples to match actual code output
- Added missing Spanish example for the `formateShort` function
- Ensured consistent output formatting in documentation examples

## [2.0.0] - 2025-04-12

### Breaking Changes
- Complete API refactoring with new function names and parameters
- Removed deprecated functions: `formatSimple()`, `formatFull()`, `formatUS()`, `formatUSFull()`, `formatWithLocale()`
- Changed to a more consistent API with locale-based formatting approach

### Added
- New streamlined API with just two main functions:
  - `formateFull()` - Formats dates with full month names based on locale
  - `formateShort()` - Formats dates with abbreviated month names based on locale
- Comprehensive README.md with installation and usage instructions
- New STEPS.md file explaining the internal workings of the package
- Improved JSDoc documentation for better IDE integration

### Improved
- Enhanced locale support with better handling of Spanish (es-ES) and English (en-US) formats
- Better capitalization of month names in Spanish locale
- More consistent date format patterns across locales
- Optimized code structure for maintainability and performance

## [1.1.1] - 2025-04-12

### Added
- Repository information added to package.json
- GitHub links for homepage and bug reporting
- Improved npm package metadata

## [1.1.0] - 2025-04-12

### Added
- US date format support with two new functions:
  - `formatUS()` - Formats dates as MM/DD/YYYY
  - `formatUSFull()` - Formats dates as MM/DD/YYYY HH:mm:ss
- New `formatWithLocale()` function that accepts a locale parameter to choose between formats
- `FORMAT_TYPES` constant for easier locale selection
- Support for parsing MM/DD/YYYY formatted date strings
- Comprehensive tests for all new functionality

### Improved
- Documentation now includes examples for all formatting options
- Better error handling for invalid locale parameters
- More comprehensive test suite

## [1.0.0] - 2025-04-12

### Added
- Initial release with two formatting options:
  - `formatSimple()` - Formats dates as YYYY-MM-DD
  - `formatFull()` - Formats dates as YYYY-MM-DD HH:mm:ss
- Support for multiple input types (Date object, string, timestamp)
- Timezone handling for date-only strings
- Comprehensive error handling

