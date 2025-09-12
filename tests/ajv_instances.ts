import type AjvCore from "@theflashlabs/ajv-plus/dist/core"
import type {Options} from "@theflashlabs/ajv-plus/dist/core"

export default function getAjvInstances(
  _Ajv: typeof AjvCore,
  options: Options,
  extraOpts: Options = {}
): AjvCore[] {
  return _getAjvInstances(options, {...extraOpts, logger: false})

  function _getAjvInstances(opts: Options, useOpts: Options): AjvCore[] {
    const optNames = Object.keys(opts)
    if (optNames.length) {
      opts = Object.assign({}, opts)
      const useOpts1: any = Object.assign({}, useOpts)
      const optName = optNames[0] as keyof Options
      useOpts1[optName] = opts[optName]
      delete opts[optName]
      return [..._getAjvInstances(opts, useOpts), ..._getAjvInstances(opts, useOpts1)]
    }
    return [new _Ajv(useOpts)]
  }
}
