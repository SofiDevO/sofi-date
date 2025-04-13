const { formatSimple, formatFull } = require('./index');

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
runTest('Current Date Formatting', () => {
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

// 2. Test specific date object formatting
runTest('Date Object Formatting', () => {
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

// 3. Test string date formatting
runTest('String Date Formatting', () => {
  const testString = '2022-12-25';
  console.log('Date string:', testString);
  console.log('formatSimple result:', formatSimple(testString));
  console.log('formatFull result:', formatFull(testString));
  
  const expectedSimple = '2022-12-25';
  
  if (formatSimple(testString) !== expectedSimple) {
    throw new Error(`Expected: ${expectedSimple}, Got: ${formatSimple(testString)}`);
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

console.log('\n----- All Tests Completed -----');

