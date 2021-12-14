export function checkIsEmpty(arg: unknown) {
  return arg === null
}

export function throwIsEmpty(argPosition: number) {
  throw new Error(`Argument ${argPosition} is Empty`)
}