const isNumber = require('isnumber');

/**
 * Format types for dates
 * @enum {string}
 */
const FORMAT_TYPES = {
  /** Spanish/International format (YYYY-MM-DD) */
  ES: 'es',
  /** US format (MM/DD/YYYY) */
  EN: 'en'
};

/**
 * Formats a date to YYYY-MM-DD (Spanish/International format)
 * @param {Date|string|number} date - The date to format. If not provided, uses current date.
 * @returns {string} The formatted date string
 */
function formatSimple(date = new Date()) {
  const dateObj = ensureDate(date);
  
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}


/**
 * Formats a date to MM/DD/YYYY (US format)
 * @param {Date|string|number} date - The date to format. If not provided, uses current date.
 * @returns {string} The formatted date string
 */
function formatUS(date = new Date()) {
  const dateObj = ensureDate(date);
  
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  
  return `${month}/${day}/${year}`;
}

/**
 * Formats a full date with time to MM/DD/YYYY HH:mm:ss (US format)
 * @param {Date|string|number} date - The date to format. If not provided, uses current date.
 * @returns {string} The formatted date string
 */
function formatUSFull(date = new Date()) {
  const dateObj = ensureDate(date);
  
  const datePart = formatUS(dateObj);
  const hours = String(dateObj.getHours()).padStart(2, '0');
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');
  const seconds = String(dateObj.getSeconds()).padStart(2, '0');
  
  return `${datePart} ${hours}:${minutes}:${seconds}`;
}

/**
 * Formats a date according to the specified locale
 * @param {Date|string|number} date - The date to format. If not provided, uses current date.
 * @param {string} locale - The locale to use for formatting: 'en' for US format (MM/DD/YYYY), 'es' for Spanish/International format (YYYY-MM-DD)
 * @param {boolean} includeTime - Whether to include time in the output
 * @returns {string} The formatted date string
 */
function formatWithLocale(date = new Date(), locale = FORMAT_TYPES.ES, includeTime = false) {
  if (locale !== FORMAT_TYPES.ES && locale !== FORMAT_TYPES.EN) {
    throw new Error(`Invalid locale: ${locale}. Supported locales are: 'en', 'es'`);
  }
  
  if (locale === FORMAT_TYPES.EN) {
    return includeTime ? formatUSFull(date) : formatUS(date);
  } else {
    return includeTime ? formatFull(date) : formatSimple(date);
  }
}
/**
 * Formats a date to YYYY-MM-DD HH:mm:ss
 * @param {Date|string|number} date - The date to format. If not provided, uses current date.
 * @returns {string} The formatted date string
 */
function formatFull(date = new Date()) {
  const dateObj = ensureDate(date);
  
  const datePart = formatSimple(dateObj);
  const hours = String(dateObj.getHours()).padStart(2, '0');
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');
  const seconds = String(dateObj.getSeconds()).padStart(2, '0');
  
  return `${datePart} ${hours}:${minutes}:${seconds}`;
}

/**
 * Helper function to ensure input is converted to a valid Date object
 * @param {Date|string|number} input - Input to convert to Date
 * @returns {Date} A valid Date object
 */
function ensureDate(input) {
  if (input instanceof Date) {
    return input;
  }
  
  if (typeof input === 'string') {
    // Check if the string is in YYYY-MM-DD format (without time)
    const dateOnlyRegexES = /^\d{4}-\d{2}-\d{2}$/;
    if (dateOnlyRegexES.test(input)) {
      // Parse the date parts and create a date with local timezone
      const [year, month, day] = input.split('-').map(Number);
      // Month is 0-indexed in JavaScript Date
      const dateObj = new Date(year, month - 1, day);
      if (isNaN(dateObj.getTime())) {
        throw new Error('Invalid date provided');
      }
      return dateObj;
    }
    
    // Check if the string is in MM/DD/YYYY format (US format)
    const dateOnlyRegexUS = /^\d{2}\/\d{2}\/\d{4}$/;
    if (dateOnlyRegexUS.test(input)) {
      // Parse the date parts and create a date with local timezone
      const [month, day, year] = input.split('/').map(Number);
      // Month is 0-indexed in JavaScript Date
      const dateObj = new Date(year, month - 1, day);
      if (isNaN(dateObj.getTime())) {
        throw new Error('Invalid date provided');
      }
      return dateObj;
    }
    
    // Handle other string formats normally
    const dateObj = new Date(input);
    if (isNaN(dateObj.getTime())) {
      throw new Error('Invalid date provided');
    }
    return dateObj;
  }
  
  if (isNumber(input) && !isNaN(input)) {
    const dateObj = new Date(input);
    if (isNaN(dateObj.getTime())) {
      throw new Error('Invalid date provided');
    }
    return dateObj;
  }
  
  throw new Error('Invalid date format. Please provide a valid Date, timestamp, or date string');
}

module.exports = {
  formatSimple,
  formatFull,
  formatUS,
  formatUSFull,
  formatWithLocale,
  FORMAT_TYPES
};
