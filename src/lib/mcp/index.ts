import { defineMcp } from "@lovable.dev/mcp-js";
import getClinicInfoTool from "./tools/get-clinic-info";
import listSpecialtiesTool from "./tools/list-specialties";
import requestAppointmentTool from "./tools/request-appointment";

export default defineMcp({
  name: "lumina-dental-mcp",
  title: "Lumina Dental MCP",
  version: "0.1.0",
  instructions:
    "Tools for Lumina Dental. Use `list_specialties` to enumerate treatment areas, `get_clinic_info` for hours and contact details, and `request_appointment` to submit a booking request.",
  tools: [listSpecialtiesTool, getClinicInfoTool, requestAppointmentTool],
});
