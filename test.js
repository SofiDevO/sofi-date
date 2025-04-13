const { 
  formatSimple, 
  formatFull, 
  formatUS, 
  formatUSFull, 
  formatWithLocale, 
  FORMAT_TYPES 
} = require('./index');

// Helper to print test results
function runTest(testName, callback) {
  console.log(`\n----- ${testName} -----`);
  try {
    callback();
    console.log('✅ Test passed');
  } catch (error) {
    console.log(`❌ Test failed: ${error.message}`);
  }
}

// 1. Test current date formatting
runTest('Current Date Formatting - Spanish/International Format', () => {
  const now = new Date();
  console.log('Current date (formatSimple):', formatSimple());
  console.log('Current date (formatFull):', formatFull());
  
  // Verify that formatSimple returns a date in YYYY-MM-DD format
  const simpleResult = formatSimple();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(simpleResult)) {
    throw new Error(`Invalid format for formatSimple: ${simpleResult}`);
  }
  
  // Verify that formatFull returns a date in YYYY-MM-DD HH:mm:ss format
  const fullResult = formatFull();
  if (!/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(fullResult)) {
    throw new Error(`Invalid format for formatFull: ${fullResult}`);
  }
});

// Test US date formats with current date
runTest('Current Date Formatting - US Format', () => {
  const now = new Date();
  console.log('Current date (formatUS):', formatUS());
  console.log('Current date (formatUSFull):', formatUSFull());
  
  // Verify that formatUS returns a date in MM/DD/YYYY format
  const usResult = formatUS();
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(usResult)) {
    throw new Error(`Invalid format for formatUS: ${usResult}`);
  }
  
  // Verify that formatUSFull returns a date in MM/DD/YYYY HH:mm:ss format
  const usFullResult = formatUSFull();
  if (!/^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}$/.test(usFullResult)) {
    throw new Error(`Invalid format for formatUSFull: ${usFullResult}`);
  }
});

// 2. Test specific date object formatting
runTest('Date Object Formatting - Spanish/International Format', () => {
  const testDate = new Date('2023-05-15T14:30:45');
  console.log('Date object:', testDate);
  console.log('formatSimple result:', formatSimple(testDate));
  console.log('formatFull result:', formatFull(testDate));
  
  const expectedSimple = '2023-05-15';
  const expectedFull = '2023-05-15 14:30:45';
  
  if (formatSimple(testDate) !== expectedSimple) {
    throw new Error(`Expected: ${expectedSimple}, Got: ${formatSimple(testDate)}`);
  }
  
  if (formatFull(testDate) !== expectedFull) {
    throw new Error(`Expected: ${expectedFull}, Got: ${formatFull(testDate)}`);
  }
});

// Test US date formats with specific date object
runTest('Date Object Formatting - US Format', () => {
  const testDate = new Date('2023-05-15T14:30:45');
  console.log('Date object:', testDate);
  console.log('formatUS result:', formatUS(testDate));
  console.log('formatUSFull result:', formatUSFull(testDate));
  
  const expectedUS = '05/15/2023';
  const expectedUSFull = '05/15/2023 14:30:45';
  
  if (formatUS(testDate) !== expectedUS) {
    throw new Error(`Expected: ${expectedUS}, Got: ${formatUS(testDate)}`);
  }
  
  if (formatUSFull(testDate) !== expectedUSFull) {
    throw new Error(`Expected: ${expectedUSFull}, Got: ${formatUSFull(testDate)}`);
  }
});

// 3. Test string date formatting - YYYY-MM-DD format
runTest('String Date Formatting - YYYY-MM-DD input', () => {
  const testString = '2022-12-25';
  console.log('Date string (YYYY-MM-DD):', testString);
  console.log('formatSimple result:', formatSimple(testString));
  console.log('formatFull result:', formatFull(testString));
  console.log('formatUS result:', formatUS(testString));
  console.log('formatUSFull result:', formatUSFull(testString));
  
  const expectedSimple = '2022-12-25';
  const expectedFull = '2022-12-25 00:00:00';
  const expectedUS = '12/25/2022';
  const expectedUSFull = '12/25/2022 00:00:00';
  
  if (formatSimple(testString) !== expectedSimple) {
    throw new Error(`Expected: ${expectedSimple}, Got: ${formatSimple(testString)}`);
  }
  
  if (formatFull(testString) !== expectedFull) {
    throw new Error(`Expected: ${expectedFull}, Got: ${formatFull(testString)}`);
  }
  
  if (formatUS(testString) !== expectedUS) {
    throw new Error(`Expected: ${expectedUS}, Got: ${formatUS(testString)}`);
  }
  
  if (formatUSFull(testString) !== expectedUSFull) {
    throw new Error(`Expected: ${expectedUSFull}, Got: ${formatUSFull(testString)}`);
  }
});

// Test string date formatting - MM/DD/YYYY format
runTest('String Date Formatting - MM/DD/YYYY input', () => {
  const testString = '12/25/2022';
  console.log('Date string (MM/DD/YYYY):', testString);
  console.log('formatSimple result:', formatSimple(testString));
  console.log('formatFull result:', formatFull(testString));
  console.log('formatUS result:', formatUS(testString));
  console.log('formatUSFull result:', formatUSFull(testString));
  
  const expectedSimple = '2022-12-25';
  const expectedFull = '2022-12-25 00:00:00';
  const expectedUS = '12/25/2022';
  const expectedUSFull = '12/25/2022 00:00:00';
  
  if (formatSimple(testString) !== expectedSimple) {
    throw new Error(`Expected: ${expectedSimple}, Got: ${formatSimple(testString)}`);
  }
  
  if (formatUS(testString) !== expectedUS) {
    throw new Error(`Expected: ${expectedUS}, Got: ${formatUS(testString)}`);
  }
});

// 4. Test timestamp formatting
runTest('Timestamp Formatting', () => {
  // January 1, 2023 00:00:00 UTC
  const timestamp = 1672531200000;
  console.log('Timestamp:', timestamp);
  console.log('formatSimple result:', formatSimple(timestamp));
  console.log('formatFull result:', formatFull(timestamp));
  
  // Note: This might need adjustment based on your timezone
  const date = new Date(timestamp);
  const expectedSimple = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  
  if (formatSimple(timestamp) !== expectedSimple) {
    throw new Error(`Expected: ${expectedSimple}, Got: ${formatSimple(timestamp)}`);
  }
});

// 5. Test error cases
runTest('Error Cases', () => {
  console.log('Testing invalid date string...');
  try {
    formatSimple('not-a-date');
    throw new Error('Should have thrown an error for invalid date string');
  } catch (error) {
    console.log('  Expected error caught:', error.message);
  }
  
  console.log('Testing invalid input type...');
  try {
    formatFull({});
    throw new Error('Should have thrown an error for invalid input type');
  } catch (error) {
    console.log('  Expected error caught:', error.message);
  }
});

// 6. Test formatWithLocale function
runTest('Locale-based Formatting', () => {
  const testDate = new Date('2023-05-15T14:30:45');
  
  // Test Spanish/International format
  console.log('Spanish format without time:', formatWithLocale(testDate, FORMAT_TYPES.ES, false));
  console.log('Spanish format with time:', formatWithLocale(testDate, FORMAT_TYPES.ES, true));
  
  // Test US format
  console.log('US format without time:', formatWithLocale(testDate, FORMAT_TYPES.EN, false));
  console.log('US format with time:', formatWithLocale(testDate, FORMAT_TYPES.EN, true));
  
  // Default behavior (should use Spanish/International)
  console.log('Default format:', formatWithLocale(testDate));
  
  // Test expected values
  const expectedES = '2023-05-15';
  const expectedESFull = '2023-05-15 14:30:45';
  const expectedEN = '05/15/2023';
  const expectedENFull = '05/15/2023 14:30:45';
  
  if (formatWithLocale(testDate, FORMAT_TYPES.ES, false) !== expectedES) {
    throw new Error(`Expected: ${expectedES}, Got: ${formatWithLocale(testDate, FORMAT_TYPES.ES, false)}`);
  }
  
  if (formatWithLocale(testDate, FORMAT_TYPES.ES, true) !== expectedESFull) {
    throw new Error(`Expected: ${expectedESFull}, Got: ${formatWithLocale(testDate, FORMAT_TYPES.ES, true)}`);
  }
  
  if (formatWithLocale(testDate, FORMAT_TYPES.EN, false) !== expectedEN) {
    throw new Error(`Expected: ${expectedEN}, Got: ${formatWithLocale(testDate, FORMAT_TYPES.EN, false)}`);
  }
  
  if (formatWithLocale(testDate, FORMAT_TYPES.EN, true) !== expectedENFull) {
    throw new Error(`Expected: ${expectedENFull}, Got: ${formatWithLocale(testDate, FORMAT_TYPES.EN, true)}`);
  }
  
  // Test with default locale (ES)
  if (formatWithLocale(testDate) !== expectedES) {
    throw new Error(`Expected: ${expectedES}, Got: ${formatWithLocale(testDate)}`);
  }
});

// 7. Test FORMAT_TYPES constants
runTest('FORMAT_TYPES Constants', () => {
  console.log('FORMAT_TYPES.ES:', FORMAT_TYPES.ES);
  console.log('FORMAT_TYPES.EN:', FORMAT_TYPES.EN);
  
  if (FORMAT_TYPES.ES !== 'es') {
    throw new Error(`Expected: 'es', Got: ${FORMAT_TYPES.ES}`);
  }
  
  if (FORMAT_TYPES.EN !== 'en') {
    throw new Error(`Expected: 'en', Got: ${FORMAT_TYPES.EN}`);
  }
});

// 8. Test invalid locale
runTest('Invalid Locale', () => {
  const testDate = new Date('2023-05-15T14:30:45');
  
  console.log('Testing invalid locale...');
  try {
    formatWithLocale(testDate, 'fr');
    throw new Error('Should have thrown an error for invalid locale');
  } catch (error) {
    console.log('  Expected error caught:', error.message);
    if (!error.message.includes('Invalid locale')) {
      throw new Error(`Expected error message about invalid locale, got: ${error.message}`);
    }
  }
});

console.log('\n----- All Tests Completed -----');

