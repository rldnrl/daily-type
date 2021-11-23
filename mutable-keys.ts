type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? A : B

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
type MutableKeys<T extends object> = {
  [P in keyof T]-?: IfEquals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] },
    P
  >
}[keyof T]
