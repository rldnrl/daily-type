import { TypeConstant } from "./type-helpers";
import { checkIsEmpty, throwIsEmpty } from "./utils/validation";

export function action<T extends TypeConstant, E>(
  type: T,
  payload: undefined,
  meta: undefined,
  error: E
): { type: T; error: E };

export function action<T extends TypeConstant, M, E>(
  type: T,
  payload: undefined,
  meta: M,
  error: E
): { type: T; meta: M; error: E };

export function action<T extends TypeConstant, P, E>(
  type: T,
  payload: P,
  meta: undefined,
  error: E
): { type: T; payload: P; error: E };

export function action<T extends TypeConstant, M>(
  type: T,
  payload: undefined,
  meta: M,
  error: undefined
): { type: T; meta: M };

export function action<T extends TypeConstant, P, M>(
  type: T,
  payload: P,
  meta: M,
  error: undefined
): { type: T; payload: P; meta: M };

export function action<T extends TypeConstant, P>(
  type: T,
  payload: P
): { type: T; payload: P };

export function action<T extends TypeConstant, P>(type: T): { type: T };

/**
 * @description flux standard action factory
 * @example
 * ```
 * const add = (amount: number, meta?: Meta, error?: boolean) => action("INCREMENT", amount, meta, error)
 * ```
 */

export function action<
  T extends TypeConstant,
  P = undefined,
  M = undefined,
  E = undefined
>(type: T, payload?: P, meta?: M, error?: E) {
  if (checkIsEmpty(type)) {
    throwIsEmpty(1);
  }

  
  return { type, payload, meta, error } as any;
}
