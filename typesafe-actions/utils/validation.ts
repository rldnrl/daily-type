import { ActionCreator, TypeConstant } from "../type-helpers";

export function checkIsEmpty(arg: unknown) {
  return arg === null;
}

export function throwIsEmpty(argPosition: number) {
  throw new Error(`Argument ${argPosition} is Empty`);
}

export function checkValidActionCreator(
  arg: unknown
): arg is ActionCreator<TypeConstant> {
  return typeof arg === "function" && "getType" in arg;
}

export function checkInvalidActionType(arg: unknown): arg is string | symbol {
  return typeof arg === "string" || typeof arg === "symbol";
}

export function checkInvalidActionCreator(arg: unknown) {
  return !checkValidActionCreator(arg);
}

export function throwInvalidActionCreator(argPosition: number): never {
  throw new Error(
    `Argument ${argPosition} is invalid, it should be an action type of type: string | symbol`
  );
}
