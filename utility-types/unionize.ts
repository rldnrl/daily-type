/**
 * 객체 안의 속성을 Union 타입화 하는 것
 * 
 * type Unionize<T extends object> = {
 *   [P in keyof T]: {
 *       [Q in P]: T[P]
 *   }
 * }[keyof T]
 *
 * Unionize<User>
 * 결과
 * {
 *   firstName: string;
 * } | {
 *   lastName: string;
 * } | {
 *   age: number;
 * } | {
 *   email: string;
 * }
 */

type Unionize<T extends object> = {
  [P in keyof T]: {
    [Q in P]: T[P]
  }
}[keyof T]