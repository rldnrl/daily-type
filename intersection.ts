/**
 * 객체에서 공통되는 속성을 골라낸다.
 * 
 * type Props = { name: string; age: number; visible: boolean };
 * type DefaultProps = { age: number };
 * 
 * Intersection<Props, DefaultProps>
 * {
 *   age: number;
 * }
 */

type Intersection<T extends object, U extends object> = Pick<
  T,
  Extract<keyof T, keyof U> & Extract<keyof U, keyof T>
>