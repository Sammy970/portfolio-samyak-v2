import { defineField, defineType } from "sanity";

export const certificationType = defineType({
  name: "certification",
  title: "Certifications",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "provider", title: "Provider", type: "string", description: "e.g. Meta, Google" }),
    defineField({ name: "issuer", title: "Issuer Platform", type: "string", description: "e.g. Coursera, Udemy" }),
    defineField({ name: "href", title: "Certificate URL", type: "url" }),
    defineField({ name: "date", title: "Date", type: "string", description: "e.g. May 2023" }),
    defineField({ name: "logoUrl", title: "Logo Path", type: "string", description: "Path to logo image, e.g. /coursera.png" }),
    defineField({ name: "image", title: "Image Path", type: "string" }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "provider" },
  },
});
