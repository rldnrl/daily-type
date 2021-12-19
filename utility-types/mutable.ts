/**
 * readonly를 제거해서 변경 가능한 타입으로 만들어주는 타입
 * 
 * type User = {
 *   readonly firstName: string
 *   readonly lastName: string
 *   readonly age: number
 * }
 * 
 * Mutable<User>
 * 
 * 결과
 * {
 *   firstName: string
 *   lastName: string
 *   age: number
 * }
 */

type Mutable<T> = { -readonly [P in keyof T]: T[P] }
