/**
 * Promise로 감싸진 타입을 추출해준다.
 * 
 * PromiseType<Promise<string>>
 * 결과
 * string
 */

type PromiseType<T extends any> = T extends Promise<infer U> ? U : never