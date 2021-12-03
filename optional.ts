/**
 * 객체 타입의 모든 프로퍼티를 옵셔널로 만들어주는 타입
 * 
 * type User = {
 *   firstName: string
 *   lastName: string
 *   age: number
 *   email: string
 * }
 * 
 * Optional<User>
 * 결과
 * {
 *   firstName?: string
 *   lastName?: string
 *   age?: number
 *   email?: string
 * }
 */

type Optional<T extends object, K extends keyof T = keyof T> = Omit<T, K> & Partial<Pick<T, K>>