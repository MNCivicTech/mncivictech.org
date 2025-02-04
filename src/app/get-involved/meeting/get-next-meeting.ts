export function getNextMeeting(): Date {
  const now = new Date();

  // Start with the current month in UTC
  let year = now.getUTCFullYear();
  let month = now.getUTCMonth();

  // Create a date object for the 1st of the current month
  let firstOfMonth = new Date(Date.UTC(year, month, 1));

  // Find the first Tuesday (day 2)
  let firstTuesday = new Date(firstOfMonth);
  firstTuesday.setUTCDate(1 + ((9 - firstOfMonth.getUTCDay()) % 7));

  // Set to 7 PM CST (which is UTC-6, so 1 AM UTC next day)
  firstTuesday.setUTCHours(1, 0, 0, 0);
  firstTuesday.setUTCDate(firstTuesday.getUTCDate() + 1);

  // If the first Tuesday is in the past, move to next month
  if (firstTuesday.getTime() <= now.getTime()) {
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
    firstOfMonth = new Date(Date.UTC(year, month, 1));
    firstTuesday = new Date(firstOfMonth);
    firstTuesday.setUTCDate(1 + ((9 - firstOfMonth.getUTCDay()) % 7));
    firstTuesday.setUTCHours(1, 0, 0, 0);
    firstTuesday.setUTCDate(firstTuesday.getUTCDate() + 1);
  }

  return firstTuesday;
}
