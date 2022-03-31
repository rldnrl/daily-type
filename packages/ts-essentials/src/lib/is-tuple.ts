/* eslint-disable @typescript-eslint/no-explicit-any */
export type IsTuple<T> = T extends any[] ? (any[] extends T ? never : T) : never
