type SetDifference<A, B> = A extends B ? never : A

/**
 * Diff
 * T로부터 U에 있는 공통 프로퍼티를 제거한다.
 * type Props = { name: string; age: number; visible: boolean };
 * type DefaultProps = { age: number };
 *
 * Diff<Props, DefaultProps>;
 * {
 *   name: string;
 *   visible: boolean;
 * }
 */

type Diff<T, U> = Pick<
  T,
  SetDifference<keyof T, keyof U>
>