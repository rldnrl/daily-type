/**
 * 모든 타입을 옵셔널로 만들어주는 타입
 * 
 * type User = {
 *   firsName: string
 *   lastName: string
 *   age: number
 *   email: string
 *   info: {
 *     company: string
 *   }
 * }
 * 
 * DeepPartial<User>
 * 
 * 결과
 * {
 *   firsName?: string | undefined;
 *   lastName?: string | undefined;
 *   age?: number | undefined;
 *   email?: string | undefined;
 *   info?: {
 *     company?: string;
 *   } | undefined;
 * }
 */

type DeepPartial<T> = T extends Function
  ? T
  : T extends Array<infer U>
  ? _DeepPartialArray<U>
  : T extends object
  ? _DeepPartialObject<T>
  : T | undefined

interface _DeepPartialArray<T> extends Array<DeepPartial<T>> {}

type _DeepPartialObject<T extends object> = {
  [P in keyof T]?: DeepPartial<T[P]>
}