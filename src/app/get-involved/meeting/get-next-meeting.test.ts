import { getNextMeeting } from "./get-next-meeting";

describe("getNextMeeting", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should return the current month's meeting when before first Tuesday", () => {
    vi.setSystemTime(new Date("2024-02-01T12:00:00Z")); // Set to February 1st, 2024 at noon UTC

    expect(getNextMeeting().toISOString()).toBe("2024-02-07T01:00:00.000Z"); // Should be Feb 6, 2024 at 7 PM CST (Feb 7, 1 AM UTC)
  });

  it("should return next month's meeting when after first Tuesday", () => {
    vi.setSystemTime(new Date("2024-02-07T12:00:00Z")); // Set to February 7th, 2024 at noon UTC

    expect(getNextMeeting().toISOString()).toBe("2024-03-06T01:00:00.000Z"); // Should be March 5, 2024 at 7 PM CST (March 6, 1 AM UTC)
  });

  it("should handle December to January transition", () => {
    vi.setSystemTime(new Date("2024-12-15T12:00:00Z")); // Set to December 15th, 2024 at noon UTC

    expect(getNextMeeting().toISOString()).toBe("2025-01-08T01:00:00.000Z"); // Should be January 7, 2025 at 7 PM CST (January 8, 1 AM UTC)
  });

  it("should handle exact meeting time", () => {
    vi.setSystemTime(new Date("2024-02-07T01:00:00Z")); // Set to February 6, 2024 at 7 PM CST (February 7, 1 AM UTC)

    expect(getNextMeeting().toISOString()).toBe("2024-03-06T01:00:00.000Z"); // Should be March 5, 2024 at 7 PM CST (March 6, 1 AM UTC)
  });

  it("should handle timezone differences correctly", () => {
    vi.setSystemTime(new Date("2024-02-01T12:00:00Z")); // Set to February 1st, 2024 at various timezone times
    const result = getNextMeeting();

    // Should always be Feb 6, 7 PM CST regardless of local timezone
    expect(
      result.toLocaleString("en-US", { timeZone: "America/Chicago" }),
    ).toContain("7:00:00 PM");
    expect(
      result.toLocaleString("en-US", { timeZone: "America/New_York" }),
    ).toContain("8:00:00 PM");
    expect(
      result.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }),
    ).toContain("5:00:00 PM");

    // Verify the actual UTC time
    expect(result.toISOString()).toBe("2024-02-07T01:00:00.000Z");
  });
});
