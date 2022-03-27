/**
 * Required로 만들고 싶은 타입을 만들 수 있는 타입
 *
 * type User = {
 *   firstName?: string
 *   lastName?: string
 *   age?: number
 * }
 *
 * AugmentRequired<User>
 *
 * 결과
 * {
 *   firstName: string
 *   lastName: string
 *   age: number
 * }
 *
 * AugmentRequired<User, "firstName" | "lastName">
 *
 * 결과
 * {
 *   firstName: string
 *   lastName: string
 *   age?: number
 * }
 */

export type AugmentRequired<
  T extends object,
  K extends keyof T = keyof T
> = Omit<T, K> & Required<Pick<T, K>>
