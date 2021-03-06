import { SetDifference } from './set-difference'

/**
 * A와 B 집합의 union과 intersection을 하고 차집합을 구한다.
 *
 * SymmetricDifference<"1" | "2" | "3", "2" | "3" | "4">
 * 결과: "1" | "4"
 */
export type SymmetricDifference<A, B> = SetDifference<A | B, A & B>
