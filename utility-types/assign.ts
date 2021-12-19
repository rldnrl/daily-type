type SetDifference<A, B> = A extends B ? never : A

type Diff<T, U> = Pick<
  T,
  SetDifference<keyof T, keyof U>
>

type Intersection<T extends object, U extends object> = Pick<
  T,
  Extract<keyof T, keyof U> & Extract<keyof U, keyof T>
>

/**
 * U에서 T에 속성 할당
 * 
 * type Props = { name: string; age: number; visible: boolean };
 * type NewProps = { age: string; other: string };
 * 
 * Assign<Props, NewProps>
 * 결과
 * {
 *   name: string;
 *   age: string;
 *   visible: boolean;
 *   other: string;
 * }
 */

type Assign<
  T extends object,
  U extends object,
  I = Diff<T, U> & Intersection<U, T> & Diff<U, T>
> = Pick<I, keyof I>