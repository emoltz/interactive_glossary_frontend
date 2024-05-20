

export type TermAndDefinition = {
  id: number;
  term: string;
  definition: string;
  language: string;
  reading_level: number;
}

export type TermsAndDefsResponse = {
  terms_and_definitions: TermAndDefinition[];
}
