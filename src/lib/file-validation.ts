export const MAX_PDF_SIZE_BYTES = 25 * 1024 * 1024;
export const DEFAULT_QUIZ_QUESTION_COUNT = 10;
export const MIN_QUIZ_QUESTION_COUNT = 1;
export const MAX_QUIZ_QUESTION_COUNT = 25;

export interface PdfValidationInput {
  name: string;
  mimeType?: string | null;
  size?: number | null;
}

export interface PdfValidationResult {
  valid: boolean;
  reason?: string;
}

export function validatePdfFile(file: PdfValidationInput): PdfValidationResult {
  const lowerName = file.name.trim().toLowerCase();
  const isPdfMime = !file.mimeType || file.mimeType === "application/pdf";
  const isPdfExt = lowerName.endsWith(".pdf");

  if (!isPdfExt || !isPdfMime) {
    return {
      valid: false,
      reason: "MVP hiện chỉ hỗ trợ tệp PDF (.pdf). Vui lòng xuất PPTX sang PDF trước khi tải lên.",
    };
  }

  if (typeof file.size === "number" && file.size > MAX_PDF_SIZE_BYTES) {
    return {
      valid: false,
      reason: "Tệp PDF vượt quá giới hạn tối đa 25 MB.",
    };
  }

  return { valid: true };
}

export function clampQuizQuestionCount(count: number): number {
  if (!Number.isFinite(count)) {
    return DEFAULT_QUIZ_QUESTION_COUNT;
  }
  return Math.min(Math.max(Math.trunc(count), MIN_QUIZ_QUESTION_COUNT), MAX_QUIZ_QUESTION_COUNT);
}

