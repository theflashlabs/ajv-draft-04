import type {Vocabulary} from "@theflashlabs/ajv-plus/dist/core"
import refKeyword from "@theflashlabs/ajv-plus/dist/vocabularies/core/ref"

const core: Vocabulary = [
  "$schema",
  "id",
  "$defs",
  {keyword: "$comment"},
  "definitions",
  refKeyword,
]

export default core
