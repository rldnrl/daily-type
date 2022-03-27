/* eslint-disable @typescript-eslint/ban-types */
/**
 * 필수 타입의 Key를 골라내는 타입
 *
 * type User = {
 *   firstName: string
 *   lastName: string
 *   age?: number
 *   email?: string
 * }
 *
 * RequiredKeys<User>
 * 결과: "firstName" | "lastName"
 */

export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T]
