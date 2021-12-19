/**
 * T가 any이면 True, 그렇지 않으면 False
 */
 export type IsAny<T, True, False = never> =
 // test if we are going the left AND right path in the condition
 true | false extends (T extends never ? true : false) ? True : False

/**
* T가 unknown이면 True, 그렇지 않으면 False
*/
export type IsUnknown<T, True, False = never> = unknown extends T
 ? IsAny<T, False, True>
 : False

export type FallbackIfUnknown<T, Fallback> = IsUnknown<T, Fallback, T>

export type IfMaybeUndefined<P, True, False> = [undefined] extends [P]
 ? True
 : False

export type IfVoid<P, True, False> = [void] extends [P] ? True : False

export type IsEmptyObj<T, True, False = never> = T extends any
 ? keyof T extends never
   ? IsUnknown<T, False, IfMaybeUndefined<T, False, IfVoid<T, False, True>>>
   : False
 : never