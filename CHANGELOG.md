# Changelog

All notable changes to the sofi-date package will be documented in this file.

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

