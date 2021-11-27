/**
 * T 객체와 정확하게 일치하는 타입 추출하는 타입
 * type Props = {
 *   req: number;
 *   reqUndef: number | undefined;
 *   opt?: string;
 * };
 * 
 * PickByValueExact<Props, number>
 * 결과
 * {
 *   req: number
 * }
 * 
 * PickByValueExact<Props, number | undefined>
 * 결과
 * {
 *   reqUndef: number | undefined
 * }
 * 
 */

type PickByValueExtract<T, ValueType> = Pick<
  T,
  {
    [Key in keyof T]-?: [ValueType] extends [T[Key]] 
    ? [T[Key]] extends [ValueType] 
      ? Key 
      : never
    : never
  }[keyof T]
>