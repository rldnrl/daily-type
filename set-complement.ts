type SetDifference<A, B> = A extends B ? never : A

/**
 * A와 A1의 보수를 구함.
 * A1은 A의 하위 집합(Sub Set)
 * SetComplement<"1" | "2" | "3", "2" | "3">
 * 결과: "1"
 */

type SetComplement<A, A1 extends A> = SetDifference<A, A1>