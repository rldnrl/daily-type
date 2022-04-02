/**
 * IsAny
 *
 * @description
 * `any`이면 `true` 타입으로 설정됩니다.
 * `0 extends 1` 은 `false` 입니다.
 * `T`는 `any` 입니다.
 *
 * `any`는 어떤 타입도 될 수 있기 때문에 `false & any` 연산은 `any`가 됩니다.
 * 그렇다면, `false & string` 혹은 `false & number` 연산은 뭘까요? `never` 입니다.
 * 교집합 연산은 공통되는 타입이 하나라도 있으면, 그 타입을 반환합니다. 그렇지 않으면 `never`을 반환합니다.
 */

export type IsAny<T> = 0 extends 1 & T ? true : false
