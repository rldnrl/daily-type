import { IfEquals } from './if-equals'

/**
 * type Props = {
 *   readonly firstName: string
 *   readonly lastName: string
 *   age: number
 * }
 *
 * ReadonlyKeys<Props>
 * 결과: "firstName" | "lastName"
 */
export type ReadonlyKeys<T extends object> = {
  [P in keyof T]-?: IfEquals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] },
    never,
    P
  >
}[keyof T]
