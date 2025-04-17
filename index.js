/**
 * Date format options
 */
const FORMAT_OPTIONS = {
  // Date only formats
  date: {
    simple: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    },
    full: {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  },
  // Date and time formats
  dateTime: {
    simple: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    },
    full: {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }
  }
};

// No need for a locales constant - users can pass locale codes directly

/**
 * Validates and parses a date input
 * @param {Date|number|string} date - Date object, timestamp or date string
 * @returns {Date} - Parsed Date object
 * @throws {Error} - If the date is invalid
 */
function validateDate(date) {
  if (date === undefined || date === null) {
    return new Date();
  }

  let parsedDate;
  
  if (date instanceof Date) {
    parsedDate = date;
  } else if (typeof date === 'number') {
    parsedDate = new Date(date);
  } else if (typeof date === 'string') {
    parsedDate = new Date(date);
  } else {
    throw new Error(`Invalid date input: ${date}. Must be a Date object, timestamp, or date string.`);
  }

  if (isNaN(parsedDate.getTime())) {
    throw new Error(`Invalid date: ${date}. Could not parse into a valid date.`);
  }

  return parsedDate;
}

/**
/**
 * Format a date according to the specified options
 * @param {Date|number|string} [date=new Date()] - Date object, timestamp, or date string
 * @param {string} [locale='en'] - Locale code (e.g., 'en', 'es', 'fr', 'en-US', 'es-MX')
 * @param {Object} [options={}] - Formatting options
 * @param {boolean} [options.includeTime=false] - Whether to include time in the output
 * @param {string} [options.style='simple'] - Format style: 'simple', 'long', or 'full'
 * @returns {string} - Formatted date string
 */
function format(date = new Date(), locale = 'en', options = {}) {
  // Set default options
  const { includeTime = false, style = 'simple' } = options;
  
  // Validate and parse the date
  const parsedDate = validateDate(date);
  
  // Determine format options based on parameters
  const formatType = includeTime ? 'dateTime' : 'date';
  
  // Default to 'simple' if the requested style doesn't exist
  const formatStyle = Object.prototype.hasOwnProperty.call(FORMAT_OPTIONS[formatType], style) 
    ? style 
    : 'simple';
    
  // Get format options
  const formatOptions = FORMAT_OPTIONS[formatType][formatStyle];
  
  // Format using toLocaleString or toLocaleDateString based on whether time is included
  try {
    return includeTime 
      ? parsedDate.toLocaleString(locale, formatOptions)
      : parsedDate.toLocaleDateString(locale, formatOptions);
  } catch (error) {
    // Handle invalid locale or other formatting errors
    console.error(`Error formatting date: ${error.message}. Using default locale.`);
    return includeTime 
      ? parsedDate.toLocaleString('en', formatOptions)
      : parsedDate.toLocaleDateString('en', formatOptions);
  }
}

/**
 * Format a date using a specific locale and style
 * @param {Date|number|string} [date=new Date()] - Date object, timestamp, or date string
 * @param {string} [locale='en'] - Locale code (e.g., 'en', 'es', 'fr')
 * @param {string} [style='simple'] - Format style: 'simple', 'long', or 'full'
 * @returns {string} - Formatted date string without time
 */
function formatDate(date = new Date(), locale = 'en', style = 'simple') {
  return format(date, locale, { includeTime: false, style });
}

/**
 * Format a date with time using a specific locale and style
 * @param {Date|number|string} [date=new Date()] - Date object, timestamp, or date string
 * @param {string} [locale='en'] - Locale code (e.g., 'en', 'es', 'fr')
 * @param {string} [style='simple'] - Format style: 'simple' or 'full'
 * @returns {string} - Formatted date string with time
 */
function formatDateTime(date = new Date(), locale = 'en', style = 'simple') {
  return format(date, locale, { includeTime: true, style });
}

/**
 * Format a date with the long style (month name and no weekday)
 * @param {Date|number|string} [date=new Date()] - Date object, timestamp, or date string
 * @param {string} [locale='en'] - Locale code
 * @returns {string} - Formatted date with month name
 */
function formatLong(date = new Date(), locale = 'en') {
  return formatDate(date, locale, 'long');
}

/**
 * Format a date with the full style (weekday and month name)
 * @param {Date|number|string} [date=new Date()] - Date object, timestamp, or date string
 * @param {string} [locale='en'] - Locale code
 * @returns {string} - Formatted date with weekday and month name
 */
function formatFull(date = new Date(), locale = 'en') {
  return formatDate(date, locale, 'full');
}

/**
 * Format a date with time using the full style
 * @param {Date|number|string} [date=new Date()] - Date object, timestamp, or date string
 * @param {string} [locale='en'] - Locale code
 * @returns {string} - Formatted date and time with weekday and month name
 */
function formatFullDateTime(date = new Date(), locale = 'en') {
  return formatDateTime(date, locale, 'full');
}
// Export all functions
module.exports = {
  // Core function
  format,
  
  // Helper functions
  formatDate,
  formatDateTime,
  formatLong,
  formatFull,
  formatFullDateTime
};
