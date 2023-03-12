import { createClamp } from './number';

/**
 * Represents a two-dimensional vector.
 */
export type Vec2 = [number, number];

/**
 * Represents a three-dimensional vector.
 */
export type Vec3 = [...Vec2, number];

/**
 * Component-wise addition of two `Vec3`s.
 *
 * @example
 * ```ts
 * add([1, 2, 3], [6, 5, 4]) // [7, 7, 7]
 * ```
 */
export const add = (a: Vec3, b: Vec3): Vec3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];

/**
 * Calculates the angle in radians between two `Vec3`s.
 *
 * Note that the angle between any vector and the zero vector is NaN
 * because the zero vector does not have a magnitude.
 *
 * @example
 * ```ts
 * angle([1, 2, 3], [1, 2, 3]) // 0
 * angle([1, 0, 0], [0, 1, 0]) // 1.57...
 * angle([0, 0, 0], [1, 0, 0]) // NaN
 * ```
 */
export const angle = (a: Vec3, b: Vec3): number =>
	Math.acos(createClamp(-1, 1)(dot(a, b) / (mag(a) * mag(b))));

/**
 * Returns a function that takes a `Vec3` and scales it by an amount.
 *
 * You can derive `negate` by scaling by `-1`.
 *
 * @example
 * createScale(2)([1, 2, 3]); // [2, 4, 6]
 * const negate = createScale(-1);
 * negate([1, 2, 3]); // [-1, -2, -3]
 */
export const createScale =
	(s: number) =>
	(v: Vec3): Vec3 =>
		multiply(v, [s, s, s]);

/**
 * Calculates the cross product of two `Vec3`s.
 *
 * @example
 * ```ts
 * cross([1, 2, 3], [4, 5, 6]); // [-3, 6, -6]
 * cross([0, 0, 0], [4, 5, 6]); // [0, 0, 0]
 * cross([1, 0, 0], [0, 1, 0]); // [0, 0, 1]
 * ```
 */
export const cross = (a: Vec3, b: Vec3): Vec3 => [
	a[1] * b[2] - a[2] * b[1],
	a[2] * b[0] - a[0] * b[2],
	a[0] * b[1] - a[1] * b[0],
];

/**
 * Component-wise subtraction between of two `Vec3`s.
 *
 * Note that `diff(a, b)` !== `diff(b, a)`.
 *
 * @example
 * diff([1, 2, 3], [0, 0, -1]); // [1, 2, 4]
 * diff([0, 0, -1], [1, 2, 3]); // [-1, -2, -4]
 */
export const diff = (a: Vec3, b: Vec3): Vec3 => add(a, negate(b));

/** Calculates the dot product of two `Vec3`s.
 *
 * @example
 * ```ts
 * dot([1, 0, 0], [0, 1, 0]); // 0
 * dot([0, 0, 0], [1, 0, 0]); // 0
 * dot([1, 0, 0], [2, 0, 0]); // 2
 * ```
 */
export const dot = (a: Vec3, b: Vec3): number => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

/**
 * Returns true if two `Vec3`s are equal on a component-wise level.
 *
 * In other words `a[i] === b[i]` for `i` in the range `0 <= i < a.length`.
 *
 * @example
 * ```ts
 * const a: Vec3 = [1, 2, 3];
 * const b: Vec3 = [1, 2, 3];
 * a === b; // false
 * equal(a, b); // true
 * ```
 */
export const equal = (a: Vec3, b: Vec3): boolean =>
	a.reduce((acc, v, i) => acc && v === b[i], true);

/**
 * Returns the magnitude of a `Vec3`.
 *
 * @example
 * ```ts
 * mag(1, 0, 0); // 1
 * mag(1, 2, 3); // 3.74...
 * ```
 */
export const mag = (v: Vec3): number => Math.hypot(...v);

/**
 * Calculates the midpoint as a `Vec3` of the addition of two `Vec3`s.
 *
 * It may help to think of `a` and `b` as offsets from the origin. First you move along `a` then along `b`.
 * `midpoint` is then a `Vec3` to the halfway point from the origin to the point `a` + `b`.
 *
 * @example
 * ```ts
 * midpoint([2, 0, 0], [0, 2, 0]); // [1, 1, 0]
 * ```
 */
export const midpoint = (a: Vec3, b: Vec3): Vec3 => createScale(1 / 2)(add(a, b));

/**
 * Component-wise multiplication of two `Vec3`s.
 *
 * You can think of `multiply` as scaling `a` by a scaling vector `b`
 * where b[0] is a scaling in the x-dimension, b[1] in the y-dimension, and b[2] in the z-dimension.
 *
 * If you only want to scale in one or two dimensions, you can use the identity for multiplication, `a * 1 = a`.
 *
 * @example
 * ```ts
 * multiply([1, 2, 3], [0, 0, 0]); // [0, 0, 0]
 * multiply([1, 2, 3], [4, 5, 6]); // [4, 10, 18]
 * multiply([1, 2, 3], [2, 1, 1]); // [2, 2, 3]
 * ```
 */
export const multiply = (a: Vec3, b: Vec3): Vec3 => [a[0] * b[0], a[1] * b[1], a[2] * b[2]];

/**
 * Negates each component of a `Vec3`.
 *
 * @example
 * ```ts
 * negate([0, 0, 0]); // [0, 0, 0]
 * negate([1, 2, 3]); // [-1, -2, -3]
 * ```
 */
export const negate = createScale(-1);

/** Normalizes a `Vec3`.
 *
 * @example
 * ```ts
 * normalize([1, 2, 3]); // [.27, .53, .80]
 * normalize([1, 0, 0]); // [1, 0, 0]
 * ```
 */
export const normalize = (v: Vec3): Vec3 => createScale(1 / mag(v))(v);

/**
 * Rotates a `Vec3` by shifting every component one position to the left.
 * Shifting the leftmost component moves it to the end.
 *
 * @example
 * ```ts
 * rotateRight([1, 2, 3]); // [2, 3, 1]
 * ```
 */
export const rotateLeft = (v: Vec3): Vec3 => [v[2], v[0], v[1]];

/**
 * Rotates a `Vec3` by shifting every component one position to the right.
 * Shifting the rightmost component moves it to the start.
 *
 * @example
 * ```ts
 * rotateRight([1, 2, 3]); // [3, 1, 2]
 * ```
 */
export const rotateRight = (v: Vec3): Vec3 => [v[2], v[0], v[1]];

/**
 * Returns a `Vec2` which is just a `Vec3` without its `z` component.
 *
 * Useful for generating points in an SVG path or anytime you want to cast a `Vec3` to a 2D space.
 *
 * @example
 * toVec2([1, 2, 3]) // [1, 2]
 */
export const toVec2 = (v: Vec3): Vec2 => [v[0], v[1]];
