/* eslint-disable @typescript-eslint/no-explicit-any */
import { NonUndefined } from './non-undefined'

/**
 * 객체 타입의 안에 값들을 필수로 만들어주는 타입
 *
 * type User = {
 *   firstName?: string
 *   lastName?: string
 *   age?: number
 *   email?: string
 *   info?: {
 *     company: string
 *   }
 *   techStack?: ["react", "typescript", "functional programming"]
 * }
 *
 * 결과
 * {
 *   firstName: string
 *   lastName: string
 *   age: number
 *   email: string
 *   info: {
 *     company: string
 *   }
 *   techStack: ["react", "typescript", "functional programming"]
 * }
 */
export type DeepRequired<T> = T extends (...args: any[]) => any
  ? T
  : T extends any[]
  ? _DeepRequiredArray<T[number]>
  : T extends object
  ? _DeepRequiredObject<T>
  : T

type _DeepRequiredArray<T> = Array<DeepRequired<NonUndefined<T>>>

type _DeepRequiredObject<T extends object> = {
  [P in keyof T]-?: DeepRequired<NonUndefined<T[P]>>
}
