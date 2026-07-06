import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "request_appointment",
  title: "Request an appointment",
  description:
    "Submit an appointment request for a patient. Returns a confirmation reference the clinic team will follow up on.",
  inputSchema: {
    name: z.string().min(1).describe("Patient full name."),
    phone: z.string().min(6).describe("Contact phone number including country code."),
    concern: z
      .string()
      .min(1)
      .describe("Primary dental concern or specialty (e.g. implants, orthodontics, cleaning)."),
    preferred_date: z
      .string()
      .optional()
      .describe("Preferred appointment date in ISO 8601 (YYYY-MM-DD) if known."),
    notes: z.string().optional().describe("Any additional context for the clinician."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: false },
  handler: ({ name, phone, concern, preferred_date, notes }) => {
    const reference = `LUM-${Date.now().toString(36).toUpperCase()}`;
    return {
      content: [
        {
          type: "text",
          text: `Appointment request received for ${name} (${phone}) regarding ${concern}. Reference: ${reference}. The clinic will confirm within one business day.`,
        },
      ],
      structuredContent: {
        reference,
        status: "received",
        patient: { name, phone },
        concern,
        preferred_date: preferred_date ?? null,
        notes: notes ?? null,
      },
    };
  },
});
