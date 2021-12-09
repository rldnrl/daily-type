interface Types {}

export type TypeConstant = string;

/**
 * @description Action을 대표하는 타입
 */

export type Action<TType extends TypeConstant = TypeConstant> = {
  type: TType
}

/**
 * @description ActionCreator를 대표하는 타입
 */

export type ActionCreator<TType extends TypeConstant = TypeConstant> = (
  ...args: any[]
) => Action<TType>

/**
 * @description Reducer를 대표하는 타입
 */

export type Reducer<TState, TAction extends Action> = (
  state: TState | undefined,
  action: TAction
) => TState

/**
 * @description payload 없는 action
 */

export type EmptyAction<TType extends TypeConstant> = {
  type: TType
}

/**
 * @description Action과 Payload
 */

export type PayloadAction<TType extends TypeConstant, TPayload> = {
  type: TType,
  payload: TPayload
}

/**
 * @description Action과 Payload, Meta
 */

export type PayloadMetaAction<TType extends TypeConstant, TPayload, TMeta> = {
  type: TType,
  payload: TPayload,
  meta: TMeta
}

/**
 * @description EmptyAction을 생성하는 Action Creator
 */

export type EmptyActionCreator<TType extends TypeConstant> = () => EmptyAction<TType>

/**
 * @description PayloadAction을 생성하는 Action Creator
 */

export type PayloadActionCreator<TType extends TypeConstant, TPayload> = (
  payload: TPayload
) => PayloadAction<TType, TPayload>

/**
 * @description PayloadMetaAction을 생성하는 Action Creator
 */

export type MetaPayloadActionCreator<TType extends TypeConstant, TPayload, TMeta> = (
  payload: TPayload,
  meta: TMeta
) => PayloadMetaAction<TType, TPayload, TMeta>

/**
 * @description Action Creator 인스턴스의 타입 getter를 나타내는 타입
 */

export interface ActionCreatorTypeMetadata<TType extends TypeConstant> {
  getType?: () => TType
}

/**
 * @description Action Creator Map 객체에서 Action Union Type 추론
 */

export type ActionType<TActionCreatorOrMap extends any> = TActionCreatorOrMap extends ActionCreator<TypeConstant>
  ? ReturnType<TActionCreatorOrMap>
  : TActionCreatorOrMap extends Record<any, any>
  ? {
      [K in keyof TActionCreatorOrMap]: ActionType<TActionCreatorOrMap[K]>
    }[keyof TActionCreatorOrMap]
  : TActionCreatorOrMap extends (infer R)
  ? never
  : never

/**
 * @description Reducer Object Map으로부터 State Object를 추론한다.
 */

export type StateType<TReducerOrMap extends any> = TReducerOrMap extends Reducer<any, any>
  ? ReturnType<TReducerOrMap>
  : TReducerOrMap extends Record<any, any>
  ? { [K in keyof TReducerOrMap]: StateType<TReducerOrMap[K]> }[keyof TReducerOrMap]
  : never