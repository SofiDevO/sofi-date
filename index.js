const isNumber = require('isnumber');

/**
 * Formats a date to YYYY-MM-DD
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
    const dateOnlyRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (dateOnlyRegex.test(input)) {
      // Parse the date parts and create a date with local timezone
      const [year, month, day] = input.split('-').map(Number);
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
  formatFull
};
