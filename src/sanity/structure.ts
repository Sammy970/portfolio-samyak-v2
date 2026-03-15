import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Portfolio")
    .items([
      S.listItem()
        .title("Profile")
        .id("profile")
        .child(
          S.documentTypeList("profile")
            .title("Profile")
            .defaultOrdering([{ field: "_createdAt", direction: "asc" }])
        ),
      S.divider(),
      S.listItem()
        .title("Work Experience")
        .id("work")
        .child(
          S.documentTypeList("work")
            .title("Work Experience")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),
      S.listItem()
        .title("Education")
        .id("education")
        .child(
          S.documentTypeList("education")
            .title("Education")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),
      S.divider(),
      S.listItem()
        .title("Projects")
        .id("project")
        .child(
          S.documentTypeList("project")
            .title("Projects")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),
      S.listItem()
        .title("Certifications")
        .id("certification")
        .child(
          S.documentTypeList("certification")
            .title("Certifications")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),
      S.listItem()
        .title("Hackathons")
        .id("hackathon")
        .child(
          S.documentTypeList("hackathon")
            .title("Hackathons")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),
    ]);
