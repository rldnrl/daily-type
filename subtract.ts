type SetDifference<A, B> = A extends B ? never : A

type SetComplement<A, A1 extends A> = SetDifference<A, A1>

/**
 * T로부터 T1에 있는 프로퍼티를 제거한다.
 * 
 * type User = {
 *   firstName: string
 *   lastName: string
 *   age: number
 *   email: string
 * }
 * 
 * type User1 = {
 *   firstName: string
 *   lastName: string
 * }
 * 
 * Subtract<User, User1>
 * 결과
 * {
 *   age: number;
 *   email: string;
 * }
 */

type Subtract<T extends T1, T1 extends object> = Pick<
  T,
  SetComplement<keyof T, keyof T1>
>
