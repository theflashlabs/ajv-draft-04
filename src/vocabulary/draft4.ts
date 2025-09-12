import type {Vocabulary} from "@theflashlabs/ajv-plus/dist/core"
import coreVocabulary from "./core"
import validationDraft4 from "./validation"
import getApplicatorVocabulary from "@theflashlabs/ajv-plus/dist/vocabularies/applicator"
import formatVocabulary from "@theflashlabs/ajv-plus/dist/vocabularies/format"

const metadataVocabulary: Vocabulary = ["title", "description", "default"]

const draft4Vocabularies: Vocabulary[] = [
  coreVocabulary,
  validationDraft4,
  getApplicatorVocabulary(),
  formatVocabulary,
  metadataVocabulary,
]

export default draft4Vocabularies
