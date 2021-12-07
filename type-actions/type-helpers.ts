interface Types {}

type TypeConstant = string;

/**
 * @description Action을 대표하는 타입
 */

type Action<TType extends TypeConstant = TypeConstant> = {
  type: TType
}

/**
 * @description ActionCreator를 대표하는 타입
 */

type ActionCreator<TType extends TypeConstant = TypeConstant> = (
  ...args: any[]
) => Action<TType>

/**
 * @description Reducer를 대표하는 타입
 */

type Reducer<TState, TAction extends Action> = (
  state: TState | undefined,
  action: TAction
) => TState

/**
 * @description payload 없는 action
 */

type EmptyAction<TType extends TypeConstant> = {
  type: TType
}
