/**
 * 객체 또는 배열 내에 타입을 Union으로 만들어주는 타입
 * 
 * type Props = { name: string; age: number; visible: boolean };
 * 
 * ValuesType<Props>
 * 결과
 * string | number | boolean
 * 
 * type NumberArray = number[];
 * 
 * ValuesType<NumberArray>
 * 결과
 * number
 * 
 * type ReadonlySymbolArray = readonly symbol[];
 * 
 * ValuesType<ReadonlySymbolArray>
 * 결과
 * symbol
 */

type ValuesType<
  T extends ReadonlyArray<any> | ArrayLike<any> | Record<any, any>
> = T extends ReadonlyArray<any>
  ? T[number]
  : T extends ArrayLike<any>
  ? T[number]
  : T extends object
  ? T[keyof T]
  : never