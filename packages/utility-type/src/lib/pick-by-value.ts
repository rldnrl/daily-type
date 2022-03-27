/**
 * T 객체와 일치하는 타입 추출하는 타입
 *
 * type User = {
 *   firstName: string
 *   lastName: string
 *   age?: number
 *   email: string
 * }
 *
 * PickByValue<User, string>
 * 결과
 * {
 *   firstName: string
 *   lastName: string
 *   email: string
 * }
 *
 * type Product = {
 *   price: number
 *   discount?: number
 * }
 *
 * PickByValue<Product, number | undefined>
 * 결과
 * {
 *   price: number;
 *   discount?: number | undefined;
 * }
 */

export type PickByValue<T, ValueType> = Pick<
  T,
  { [Key in keyof T]-?: T[Key] extends ValueType ? Key : never }[keyof T]
>
