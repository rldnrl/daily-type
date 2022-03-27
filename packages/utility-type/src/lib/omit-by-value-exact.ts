/**
 * 엄밀하게 특정 타입을 제외하는 타입
 *
 * ```ts
 * type User = {
 *   fisrtName: string
 *   lastName: string
 *   age: number
 *   email: string
 * }
 * ```
 *
 * ```ts
 * OmitByValue<User, number>
 * // 결과
 * {
 *   fisrtName: string;
 *   lastName: string;
 *   email: string;
 * }
 * ```
 *
 * ```ts
 * type Product = {
 *   name: string
 *   price: number
 *   discount?: number
 *   description: string
 *   rating?: number
 * }
 * ```
 *
 * ```ts
 * OmitByValue<Product, number | undefined>
 * // 결과
 * {
 *   name: string;
 *   description: string;
 * }
 * ```
 */

export type OmitByValueExact<T, ValueType> = Omit<
  T,
  {
    [Key in keyof T]-?: [ValueType] extends [T[Key]]
      ? [T[Key]] extends [ValueType]
        ? Key
        : never
      : never
  }[keyof T]
>
