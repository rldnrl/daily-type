import { IfEquals } from './if-equals'

/**
 * readonly가 없는 타입
 *
 * type Props = {
 *   readonly firstName: string
 *   readonly lastName: string
 *   age: number
 *   onClick: () => void
 * }
 *
 * MutableKeys<Props>
 * 결과: "age" | "onClick"
 */
export type MutableKeys<T extends object> = {
  [P in keyof T]-?: IfEquals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] },
    P
  >
}[keyof T]
