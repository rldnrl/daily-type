/**
 * type MixedProps = {
 *   name: string;
 *   setName: (name: string) => void;
 *   someKeys?: string;
 *   someFn?: (...args: any) => any;
 * };
 * 
 * FunctionKey<MixedProps>
 * 
 * 결과: "setName" | "someFn"
 */

type NonUndefined<A> = A extends undefined ? never : A

type FunctionKeys<T extends object> = {
  [K in keyof T] -?: NonUndefined<T[K]> extends Function ? K : never
}[keyof T]
