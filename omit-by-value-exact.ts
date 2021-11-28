/**
 * 엄밀하게 특정 타입을 제외하는 타입
 * 
 * type User = {
 *   fisrtName: string
 *   lastName: string
 *   age: number
 *   email: string
 * }
 *
 * OmitByValue<User, number>
 * 결과
 * {
 *   fisrtName: string;
 *   lastName: string;
 *   email: string;
 * }
 * 
 * type Product = {
 *   name: string
 *   price: number
 *   discount?: number
 *   description: string
 *   rating?: number
 * }
 * 
 * OmitByValue<Product, number | undefined>
 * 결과
 * {
 *   name: string;
 *   description: string;
 * }
 */

type OmitByValueExact<T, ValueType> = Omit<
  T,
  {
    [Key in keyof T]-?: [ValueType] extends [T[Key]]
      ? [T[Key]] extends [ValueType]
        ? Key
        : never
      : never
  }[keyof T]
>