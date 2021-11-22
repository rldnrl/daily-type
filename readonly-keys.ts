type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? A : B

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
type ReadonlyKeys<T extends object> = {
  [P in keyof T]-?: IfEquals<
    { [Q in P] : T[P] },
    { -readonly [Q in P] : T[P] },
    never,
    P
  >
}[keyof T]
