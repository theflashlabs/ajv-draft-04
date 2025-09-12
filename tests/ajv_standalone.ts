import type AjvCore from "@theflashlabs/ajv-plus/dist/core"
import AjvPack from "@theflashlabs/ajv-plus/dist/standalone/instance"

export function withStandalone(instances: AjvCore[]): (AjvCore | AjvPack)[] {
  return [...(instances as (AjvCore | AjvPack)[]), ...instances.map(makeStandalone)]
}

function makeStandalone(ajv: AjvCore): AjvPack {
  return new AjvPack(ajv)
}
