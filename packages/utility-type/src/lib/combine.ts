/**
 * I want to merge (intersection, extends) the T type and the U type. However, there is something in common between the T type and the U type, so they cannot be combined.
 * So, it is a Util type that first removes and merges common types.
 *
 * T 타입과 U 타입을 합치고(intersection, extends) 싶다. 그러나 T 타입과 U 타입에 공통적인 것이 있어서 합칠 수가 없다.
 * 그래서 공통적인 타입을 먼저 제거하고 합치는 Util 타입이다.
 */
export type Combine<T, U> = T & Omit<U, keyof T>
