// **Decision Making Tasks**

/* 1. Leap Year Checker */
function isLeapYear(year) {
  alert(
    year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
      ? `${year} is a leap year.`
      : `${year} is not a leap year.`
  );
}

/* 2. Ticket Pricing */
function ticketPrice(age) {
  alert(
    age <= 12
      ? "Ticket price: $10"
      : age <= 17
      ? "Ticket price: $15"
      : "Ticket price: $20"
  );
}

// **Recursion Tasks**

/* 1. Fibonacci Sequence */
function fibonacci(n) {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/* 2. Palindrome Checker */
function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return str === str.split("").reverse().join("");
}
