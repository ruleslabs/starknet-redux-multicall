import { RawArgs } from 'starknet'

export function areCallInputsValid(callInputs?: RawArgs): callInputs is RawArgs {
  if (!callInputs) return false

  for (const key of Object.keys(callInputs)) {
    if (!callInputs[key]) return false
  }

  return true
}
