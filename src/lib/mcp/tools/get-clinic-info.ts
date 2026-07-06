import { defineTool } from "@lovable.dev/mcp-js";

const CLINIC_INFO = {
  name: "Lumina Dental",
  tagline: "Modern clinical precision for lifelong smiles.",
  chiefClinician: "Dr. Aravind Rao, BDS, MDS (Prosthodontics)",
  hours: {
    monday_friday: "9:00 AM – 8:00 PM",
    saturday: "9:00 AM – 6:00 PM",
    sunday: "10:00 AM – 2:00 PM (by appointment)",
  },
  contact: {
    phone: "+91 98765 43210",
    email: "care@luminadental.in",
  },
  stats: {
    smiles_delivered: "15,000+",
    specialists: 12,
    years_of_care: 18,
  },
};

export default defineTool({
  name: "get_clinic_info",
  title: "Get clinic information",
  description: "Return contact details, hours, and key stats for Lumina Dental.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(CLINIC_INFO, null, 2) }],
    structuredContent: CLINIC_INFO,
  }),
});
