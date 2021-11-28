/**
 * 특정 타입을 제외하는 타입
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

type OmitByValue<T, ValueType> = Omit<
  T,
  { [Key in keyof T]-?: T[Key] extends ValueType ? never : Key }[keyof T]
>