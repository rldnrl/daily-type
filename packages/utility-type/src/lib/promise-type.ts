/**
 * Promise로 반환되는 타입을 추출해준다.
 *
 * PromiseType<Promise<string>>
 * 결과
 * string
 */

export type PromiseType<T> = T extends Promise<infer U> ? U : never
