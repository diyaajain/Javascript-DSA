document.getElementById('check-btn').addEventListener('click', function() {
  const userInput = document.getElementById('user-input').value;
  const resultsDiv = document.getElementById('results-div');

  if (userInput === '') {
    alert('Please provide a phone number');
    return;
  }

  const valid = validatePhoneNumber(userInput);
  resultsDiv.textContent = valid ? `Valid US number: ${userInput}` : `Invalid US number: ${userInput}`;
});

document.getElementById('clear-btn').addEventListener('click', function() {
  document.getElementById('user-input').value = '';
  document.getElementById('results-div').textContent = '';
});

function validatePhoneNumber(phone) {
  const validFormats = [
    /^1?\s?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/,         // 555-555-5555, 555.555.5555, 555 555 5555
    /^1?\s?\(\d{3}\)\s?\d{3}[-.\s]?\d{4}$/,         // (555) 555-5555, (555)555-5555
    /^1?\s?\d{3}\s?\d{3}[-.\s]?\d{4}$/,             // 1 555-555-5555, 1 555 555 5555
    /^1?\(\d{3}\)\d{3}[-.\s]?\d{4}$/                // 1(555)555-5555
  ];

  for (const format of validFormats) {
    if (format.test(phone)) {
      const countryCode = phone.startsWith('1') ? '1' : '';
      const num = phone.replace(/[^0-9]/g, '');
      return num.length === 10 || (num.length === 11 && countryCode === '1');
    }
  }
  return false;
}