import { defineField, defineType } from "sanity";

export const workType = defineType({
  name: "work",
  title: "Work Experience",
  type: "document",
  fields: [
    defineField({ name: "company", title: "Company", type: "string", validation: (r) => r.required() }),
    defineField({ name: "href", title: "Company Website", type: "url" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "title", title: "Job Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "logoUrl", title: "Logo Path", type: "string", description: "Path to logo image, e.g. /rugas.png" }),
    defineField({ name: "start", title: "Start Date", type: "string", description: "e.g. June 2024" }),
    defineField({ name: "end", title: "End Date", type: "string", description: "e.g. Present" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 5 }),
    defineField({
      name: "badges",
      title: "Badges",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower number = shown first",
    }),
  ],
  orderings: [
    { title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "company" },
  },
});
