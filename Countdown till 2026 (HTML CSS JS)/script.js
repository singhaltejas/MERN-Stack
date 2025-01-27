function calculateDateDifference() {
  // Ensure dates are Date objects
  const d1 = new Date("December 31, 2025 23:59:59");
  const d2 = new Date();

  // Find the difference in milliseconds
  let diff = Math.abs(d1 - d2);

  // Constants for time conversion
  const MS_IN_SECOND = 1000;
  const MS_IN_MINUTE = 60 * MS_IN_SECOND;
  const MS_IN_HOUR = 60 * MS_IN_MINUTE;
  const MS_IN_DAY = 24 * MS_IN_HOUR;

  // Days, hours, minutes, seconds
  const days = Math.floor(diff / MS_IN_DAY);
  diff %= MS_IN_DAY;

  const hours = Math.floor(diff / MS_IN_HOUR);
  diff %= MS_IN_HOUR;

  const minutes = Math.floor(diff / MS_IN_MINUTE);
  diff %= MS_IN_MINUTE;

  const seconds = Math.floor(diff / MS_IN_SECOND);

  // Handle months separately
  let months = 0;
  let tempDate = new Date(Math.min(d1, d2));
  while (tempDate < new Date(Math.max(d1, d2))) {
    tempDate.setMonth(tempDate.getMonth() + 1);
    if (tempDate <= new Date(Math.max(d1, d2))) {
      months++;
    }
  }

  return { months, days, hours, minutes, seconds };
}

setInterval(() => {
    const { months, days, hours, minutes, seconds } = calculateDateDifference();
    document.getElementById("countdown").innerHTML = `${months} Months : ${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;
}, 1000)
