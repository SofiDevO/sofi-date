# Changelog

All notable changes to the sofi-date package will be documented in this file.

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

