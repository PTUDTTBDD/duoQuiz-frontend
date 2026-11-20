import { clampQuizQuestionCount, MAX_PDF_SIZE_BYTES, validatePdfFile } from "@/lib/file-validation";
import { parseReminderTime } from "@/features/notifications/notifications.service";

describe("file-validation & F14 rules", () => {
  it("accepts valid PDF under 25 MB", () => {
    const result = validatePdfFile({
      name: "lecture-01.pdf",
      mimeType: "application/pdf",
      size: 1024 * 1024,
    });
    expect(result.valid).toBe(true);
  });

  it("rejects PPTX files in MVP (F10 excluded)", () => {
    const result = validatePdfFile({
      name: "slides.pptx",
      mimeType: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      size: 1024 * 1024,
    });
    expect(result.valid).toBe(false);
  });

  it("rejects PDF larger than 25 MB", () => {
    const result = validatePdfFile({
      name: "huge.pdf",
      mimeType: "application/pdf",
      size: MAX_PDF_SIZE_BYTES + 1,
    });
    expect(result.valid).toBe(false);
  });

  it("clamps quiz question count to 1..25 (F14)", () => {
    expect(clampQuizQuestionCount(0)).toBe(1);
    expect(clampQuizQuestionCount(10)).toBe(10);
    expect(clampQuizQuestionCount(99)).toBe(25);
    expect(clampQuizQuestionCount(Number.NaN)).toBe(10);
  });

  it("parses reminder time and falls back to 20:00", () => {
    expect(parseReminderTime("21:30")).toEqual({ hour: 21, minute: 30 });
    expect(parseReminderTime("invalid")).toEqual({ hour: 20, minute: 0 });
  });
});

