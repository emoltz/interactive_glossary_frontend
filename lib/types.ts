type Definition = {
  definition: string;
  grade_level: number;
  language: string;
}

type TermAndDefinition = {
  term: string;
  definitions: Definition[]
}


export type TermByGradeLevelResponse = {
  terms_and_definitions: TermAndDefinition[];
}
