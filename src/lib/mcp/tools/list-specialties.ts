import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const SPECIALTIES = [
  { name: "Dental Implants", description: "Single-tooth, full-arch, and All-on-4 implant restorations." },
  { name: "Orthodontics", description: "Clear aligners, ceramic braces, and traditional orthodontic treatment." },
  { name: "Root Canal Therapy", description: "Single-visit endodontics using rotary and apex locator technology." },
  { name: "Cosmetic Dentistry", description: "Veneers, teeth whitening, and digital smile design." },
  { name: "Pediatric Dentistry", description: "Preventive and restorative care for infants, children, and teens." },
  { name: "Oral & Maxillofacial Surgery", description: "Wisdom teeth, jaw surgery, and facial trauma reconstruction." },
  { name: "Periodontics", description: "Gum disease treatment, scaling, and periodontal surgery." },
  { name: "Prosthodontics", description: "Crowns, bridges, dentures, and full-mouth rehabilitation." },
  { name: "Preventive Dentistry", description: "Cleanings, fluoride therapy, and oral health education." },
];

export default defineTool({
  name: "list_specialties",
  title: "List dental specialties",
  description: "Return the list of dental specialties offered at Lumina Dental.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(SPECIALTIES, null, 2) }],
    structuredContent: { specialties: SPECIALTIES },
  }),
});
