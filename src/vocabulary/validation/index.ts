import type {ErrorObject, Vocabulary} from "@theflashlabs/ajv-plus/dist/core"
import limitNumber, {LimitNumberError} from "./limitNumber"
import limitNumberExclusive from "./limitNumberExclusive"
import multipleOf, {
  MultipleOfError,
} from "@theflashlabs/ajv-plus/dist/vocabularies/validation/multipleOf"
import limitLength from "@theflashlabs/ajv-plus/dist/vocabularies/validation/limitLength"
import pattern, {PatternError} from "@theflashlabs/ajv-plus/dist/vocabularies/validation/pattern"
import limitProperties from "@theflashlabs/ajv-plus/dist/vocabularies/validation/limitProperties"
import required, {RequiredError} from "@theflashlabs/ajv-plus/dist/vocabularies/validation/required"
import limitItems from "@theflashlabs/ajv-plus/dist/vocabularies/validation/limitItems"
import uniqueItems, {
  UniqueItemsError,
} from "@theflashlabs/ajv-plus/dist/vocabularies/validation/uniqueItems"
import constKeyword, {ConstError} from "@theflashlabs/ajv-plus/dist/vocabularies/validation/const"
import enumKeyword, {EnumError} from "@theflashlabs/ajv-plus/dist/vocabularies/validation/enum"

const validation: Vocabulary = [
  // number
  limitNumber,
  limitNumberExclusive,
  multipleOf,
  // string
  limitLength,
  pattern,
  // object
  limitProperties,
  required,
  // array
  limitItems,
  uniqueItems,
  // any
  {keyword: "type", schemaType: ["string", "array"]},
  {keyword: "nullable", schemaType: "boolean"},
  constKeyword,
  enumKeyword,
]

export default validation

type LimitError = ErrorObject<
  "maxItems" | "minItems" | "minProperties" | "maxProperties" | "minLength" | "maxLength",
  {limit: number},
  number | {$data: string}
>

export type ValidationKeywordError =
  | LimitError
  | LimitNumberError
  | MultipleOfError
  | PatternError
  | RequiredError
  | UniqueItemsError
  | ConstError
  | EnumError
