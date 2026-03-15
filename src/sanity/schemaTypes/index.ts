import { type SchemaTypeDefinition } from "sanity";
import { profileType } from "./profileType";
import { workType } from "./workType";
import { educationType } from "./educationType";
import { projectType } from "./projectType";
import { certificationType } from "./certificationType";
import { hackathonType } from "./hackathonType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profileType, workType, educationType, projectType, certificationType, hackathonType],
};
