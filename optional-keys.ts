/**
 * 옵션널 타입의 Key를 골라내는 타입
 * 
 * type User = {
 *   firstName: string
 *   lastName: string
 *   age?: number
 *   email?: string
 * }
 * 
 * OptionalKeys<User>
 * 결과: "age" | "email"
 */

type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never
}[keyof T]