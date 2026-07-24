export function reportLovableError(error: Error, metadata?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    console.error("[Lovable Error]", error, metadata);
  }
}
