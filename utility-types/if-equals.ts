/**
 * IfEquals 타입
 * X와 Y가 extends 되면 X 타입
 * 그렇지 않으면 never 타입
 * 
 * IfEquals<"1" | "2", "1" | "2">
 * 결과: "1" | "2"
 * 
 * IfEquals<string, number>
 * 결과: never
 */

type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? A : B
