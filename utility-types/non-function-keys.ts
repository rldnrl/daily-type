/**
 * type MixedProps = {
 *   name: string;
 *   setName: (name: string) => void;
 *   someKeys?: string;
 *   someFn?: (...args: any) => any;
 * };
 * 
 * NonFunctionKeys<MixedProps>
 * 
 * 결과: "name" | "someKeys"
 */

type NonUndefined<A> = A extends undefined ? never : A

type NonFunctionKeys<T extends object> = {
  [Key in keyof T] -?: NonUndefined<T[Key]> extends Function ? never : T[Key]
}[keyof T]
