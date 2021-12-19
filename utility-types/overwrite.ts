type Intersection<T extends object, U extends object> = Pick<
  T,
  Extract<keyof T, keyof U> & Extract<keyof U, keyof T>
>

type SetDifference<A, B> = A extends B ? never : A

type Diff<T, U> = Pick<
  T,
  SetDifference<keyof T, keyof U>
>

/**
 * U에서 T로 속성 덮어쓰기
 * 
 * type Props = {
 *   name: string;
 *   age: number;
 *   visible: boolean
 * };
 * 
 * type NewProps = {
 *   age: string;
 *   other: string
 * };
 * 
 * Overwrite<Props, NewProps>
 * {
 *   name: string;
 *   age: string;
 *   visible: boolean;
 * }
 */

type Overwrite<
  T extends object,
  U extends object,
  I = Diff<T, U> & Intersection<U, T>
> = Pick<I, keyof I>