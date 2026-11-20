import * as Notifications from "expo-notifications";

export const DEFAULT_REMINDER_HOUR = 20;
export const DEFAULT_REMINDER_MINUTE = 0;

export function parseReminderTime(time: string): { hour: number; minute: number } {
  const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(time.trim());
  if (!match) {
    return { hour: DEFAULT_REMINDER_HOUR, minute: DEFAULT_REMINDER_MINUTE };
  }
  return { hour: Number(match[1]), minute: Number(match[2]) };
}

/**
 * Schedule at most 1 local daily notification (default 20:00) with deep-link payload to /review/session.
 */
export async function scheduleDailyStudyReminder(
  enabled: boolean,
  time: string = "20:00"
): Promise<void> {
  await Notifications.cancelAllScheduledNotificationsAsync();
  if (!enabled) {
    return;
  }

  const { hour, minute } = parseReminderTime(time);
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Đến giờ ôn nhanh 5 phút",
      body: "Bạn có câu hỏi cần ôn lại trên DuoQuiz.",
      data: { route: "/review/session" },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour,
      minute,
    },
  });
}

