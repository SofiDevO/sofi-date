/**
 * Format types for date localization
 */
const FORMAT_TYPES = {
  ES: 'es',
  EN: 'en'
};

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
    // Check if the string is in YYYY-MM-DD format
    const isoDateRegex = /^(\d{4})-(\d{2})-(\d{2})$/;
    const match = date.match(isoDateRegex);
    
    if (match) {
      // If it's in YYYY-MM-DD format, create a date using local time components
      const year = parseInt(match[1], 10);
      const month = parseInt(match[2], 10) - 1; // Month is 0-indexed in JavaScript
      const day = parseInt(match[3], 10);
      parsedDate = new Date(year, month, day);
    } else {
      // For other string formats, use the default Date constructor
      parsedDate = new Date(date);
    }
  } else {
    throw new Error(`Invalid date input: ${date}. Must be a Date object, timestamp, or date string.`);
  }

  if (isNaN(parsedDate.getTime())) {
    throw new Error(`Invalid date: ${date}. Could not parse into a valid date.`);
  }

  return parsedDate;
}

/**
 * Formats a date in YYYY-MM-DD format
 * @param {Date|number|string} [date] - Date object, timestamp, or date string (defaults to current date)
 * @returns {string} - Formatted date string in YYYY-MM-DD format
 */
function formatSimple(date) {
  const parsedDate = validateDate(date);
  
  const year = parsedDate.getFullYear();
  const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
  const day = String(parsedDate.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

/**
 * Formats a date in YYYY-MM-DD HH:mm:ss format
 * @param {Date|number|string} [date] - Date object, timestamp, or date string (defaults to current date)
 * @returns {string} - Formatted date string in YYYY-MM-DD HH:mm:ss format
 */
function formatFull(date) {
  const parsedDate = validateDate(date);
  
  const datePart = formatSimple(parsedDate);
  const hours = String(parsedDate.getHours()).padStart(2, '0');
  const minutes = String(parsedDate.getMinutes()).padStart(2, '0');
  const seconds = String(parsedDate.getSeconds()).padStart(2, '0');
  
  return `${datePart} ${hours}:${minutes}:${seconds}`;
}

/**
 * Formats a date in MM/DD/YYYY format
 * @param {Date|number|string} [date] - Date object, timestamp, or date string (defaults to current date)
 * @returns {string} - Formatted date string in MM/DD/YYYY format
 */
function formatUS(date) {
  const parsedDate = validateDate(date);
  
  const year = parsedDate.getFullYear();
  const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
  const day = String(parsedDate.getDate()).padStart(2, '0');
  
  return `${month}/${day}/${year}`;
}

/**
 * Formats a date in MM/DD/YYYY HH:mm:ss format
 * @param {Date|number|string} [date] - Date object, timestamp, or date string (defaults to current date)
 * @returns {string} - Formatted date string in MM/DD/YYYY HH:mm:ss format
 */
function formatUSFull(date) {
  const parsedDate = validateDate(date);
  
  const datePart = formatUS(parsedDate);
  const hours = String(parsedDate.getHours()).padStart(2, '0');
  const minutes = String(parsedDate.getMinutes()).padStart(2, '0');
  const seconds = String(parsedDate.getSeconds()).padStart(2, '0');
  
  return `${datePart} ${hours}:${minutes}:${seconds}`;
}

/**
 * Format a date according to the specified locale and time inclusion
 * @param {Date|number|string} [date] - Date object, timestamp, or date string (defaults to current date)
 * @param {string} [locale=FORMAT_TYPES.ES] - Locale code (FORMAT_TYPES.ES or FORMAT_TYPES.EN)
 * @param {boolean} [includeTime=false] - Whether to include time in the output
 * @returns {string} - Formatted date string based on locale and time inclusion
 * @throws {Error} - If the locale is invalid
 */
function formatWithLocale(date, locale = FORMAT_TYPES.ES, includeTime = false) {
  const parsedDate = validateDate(date);
  
  // Validate locale
  if (locale !== FORMAT_TYPES.ES && locale !== FORMAT_TYPES.EN) {
    throw new Error(`Invalid locale: ${locale}. Must be either '${FORMAT_TYPES.ES}' or '${FORMAT_TYPES.EN}'.`);
  }
  
  if (locale === FORMAT_TYPES.ES) {
    return includeTime ? formatFull(parsedDate) : formatSimple(parsedDate);
  } else {
    return includeTime ? formatUSFull(parsedDate) : formatUS(parsedDate);
  }
}

module.exports = {
  formatSimple,
  formatFull,
  formatUS,
  formatUSFull,
  formatWithLocale,
  FORMAT_TYPES
};
