# Vextreme

> **Warning**
> I won't be maintainging this library. I thought I'd write some tests and be done with it but to get the kinds of meaningful tests and *generic-ness* out of the library that I want, I'd be reinventing the wheel. There are already functional libraries that are much more stable/flexible/well-tested for the kinds of tasks that I'd want to do with `Vextreme`. If you're looking for an alternative, try [ramdajs](https://ramdajs.com/).

Type-safe functions for 3-dimensional vectors.

## Get Started

```
npm install vextreme
```

Use the types and functions in your source code

```typescript
import { type Vec3, add } from 'vextreme';

const a: Vec3 = [0, 1, 2];
const b: Vec3 = [3, 4, 5];
const c = add(a, b);
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

- [Vec2](#vec2)
- [Vec3](#vec3)
- [add](#add)
  - [Parameters](#parameters)
  - [Examples](#examples)
- [angle](#angle)
  - [Parameters](#parameters-1)
  - [Examples](#examples-1)
- [createScale](#createscale)
  - [Parameters](#parameters-2)
  - [Examples](#examples-2)
- [cross](#cross)
  - [Parameters](#parameters-3)
  - [Examples](#examples-3)
- [diff](#diff)
  - [Parameters](#parameters-4)
  - [Examples](#examples-4)
- [dot](#dot)
  - [Parameters](#parameters-5)
  - [Examples](#examples-5)
- [equal](#equal)
  - [Parameters](#parameters-6)
  - [Examples](#examples-6)
- [mag](#mag)
  - [Parameters](#parameters-7)
  - [Examples](#examples-7)
- [midpoint](#midpoint)
  - [Parameters](#parameters-8)
  - [Examples](#examples-8)
- [multiply](#multiply)
  - [Parameters](#parameters-9)
  - [Examples](#examples-9)
- [negate](#negate)
  - [Examples](#examples-10)
- [normalize](#normalize)
  - [Parameters](#parameters-10)
  - [Examples](#examples-11)
- [rotateLeft](#rotateleft)
  - [Parameters](#parameters-11)
  - [Examples](#examples-12)
- [rotateRight](#rotateright)
  - [Parameters](#parameters-12)
  - [Examples](#examples-13)
- [toVec2](#tovec2)
  - [Parameters](#parameters-13)
  - [Examples](#examples-14)

### Vec2

Represents a two-dimensional vector.

Type: \[[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number), [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)]

### Vec3

Represents a three-dimensional vector.

Type: \[...[Vec2](#vec2), [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)]

### add

Component-wise addition of `a` and `b`.

#### Parameters

- `a` **[Vec3](#vec3)**&#x20;
- `b` **[Vec3](#vec3)**&#x20;

#### Examples

```javascript
add([0, 1, 2], [5, 4, 3]); // [5, 5, 5]
```

Returns **[Vec3](#vec3)**&#x20;

### angle

Calculates the angle in radians between `a` and `b`.

Note that the angle between any vector and the zero vector is `NaN`
because the zero vector does not have a magnitude.

#### Parameters

- `a` **[Vec3](#vec3)**&#x20;
- `b` **[Vec3](#vec3)**&#x20;

#### Examples

```javascript
angle([0, 1, 2], [0, 1, 2]); // 0
angle([1, 0, 0], [0, 1, 0]); // 1.57...
angle([0, 0, 0], [1, 0, 0]); // NaN
```

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)**&#x20;

### createScale

Returns a function that takes `v` and scales it by `s`.

You can think of negation as a scaling of -1.

#### Parameters

- `s` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)**&#x20;

#### Examples

```javascript
createScale(2)([0, 1, 2]); // [0, 2, 4]
const negate = createScale(-1);
negate([0, 1, 2]); // [0, -1, -2]
```

### cross

Calculates the cross product of `a` and `b`.

#### Parameters

- `a` **[Vec3](#vec3)**&#x20;
- `b` **[Vec3](#vec3)**&#x20;

#### Examples

```javascript
cross([0, 1, 2], [3, 4, 5]); // [-3, 6, -3]
cross([0, 0, 0], [0, 1, 2]); // [0, 0, 0]
cross([1, 0, 0], [0, 1, 0]); // [0, 0, 1]
```

Returns **[Vec3](#vec3)**&#x20;

### diff

Component-wise subtraction between `a` and `b`.

Note that `diff(a, b)` !== `diff(b, a)`.

#### Parameters

- `a` **[Vec3](#vec3)**&#x20;
- `b` **[Vec3](#vec3)**&#x20;

#### Examples

```javascript
diff([0, 1, 2], [0, 0, -1]); // [0, 1, 3]
diff([0, 0, -1], [0, 1, 2]); // [0, -1, -3]
diff([0, 1, 2], [0, 1, 2]); // [0, 0, 0]
```

Returns **[Vec3](#vec3)**&#x20;

### dot

Calculates the dot product of `a` and `b`.

#### Parameters

- `a` **[Vec3](#vec3)**&#x20;
- `b` **[Vec3](#vec3)**&#x20;

#### Examples

```javascript
dot([1, 0, 0], [0, 1, 0]); // 0
dot([0, 0, 0], [1, 0, 0]); // 0
dot([1, 0, 0], [2, 0, 0]); // 2
```

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)**&#x20;

### equal

Returns true if `a` and `b` are equal on a component-wise level.

In other words `a[i] === b[i]` for `i` in the range `0 <= i < a.length`.

#### Parameters

- `a` **[Vec3](#vec3)**&#x20;
- `b` **[Vec3](#vec3)**&#x20;

#### Examples

```javascript
const a: Vec3 = [0, 1, 2];
const b: Vec3 = [0, 1, 2];
a === b; // false
equal(a, b); // true
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**&#x20;

### mag

Returns the magnitude of `v`.

#### Parameters

- `v` **[Vec3](#vec3)**&#x20;

#### Examples

```javascript
mag(1, 0, 0); // 1
mag(0, 1, 2); // 2.23606797749979
```

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)**&#x20;

### midpoint

Calculates the midpoint as a `Vec3` of the addition of `a` and `b`.

It may help to think of `a` and `b` as offsets from the origin.
First you move along `a` then move along `b` to get to the point `p`.
If `v` is a vector from the origin to `p`, `midpoint(a, b)` is scaling of `v` by 1 / 2;

#### Parameters

- `a` **[Vec3](#vec3)**&#x20;
- `b` **[Vec3](#vec3)**&#x20;

#### Examples

```javascript
midpoint([1, 0, 0], [0, 1, 0]); // [0.5, 0.5, 0]
```

Returns **[Vec3](#vec3)**&#x20;

### multiply

Component-wise multiplication of `a` and `b`.

You can think of `multiply` as a scaling of `a` by the vector `b`
where b\[0] is a scaling in the x-dimension, b\[1] in the y-dimension, and b\[2] in the z-dimension.

If you only want to scale in one or two dimensions, you can use the identity for multiplication, `a * 1 = a`.

#### Parameters

- `a` **[Vec3](#vec3)**&#x20;
- `b` **[Vec3](#vec3)**&#x20;

#### Examples

```javascript
multiply([0, 1, 2], [3, 4, 5]); // [0, 4, 10]
multiply([0, 1, 2], [1, 1, 5]); // [0, 1, 10]
multiply([0, 1, 2], [0, 0, 0]); // [0, 0, 0]
```

Returns **[Vec3](#vec3)**&#x20;

### negate

Negates each component of a `Vec3`.

#### Examples

```javascript
negate([0, 0, 0]); // [0, 0, 0]
negate([0, 1, 2]); // [0, -1, -2]
```

### normalize

Normalizes `v`.

#### Parameters

- `v` **[Vec3](#vec3)**&#x20;

#### Examples

```javascript
normalize([0, 1, 2]); // [0, 0.4472135954999579, 0.8944271909999159]
normalize([1, 0, 0]); // [1, 0, 0]
```

Returns **[Vec3](#vec3)**&#x20;

### rotateLeft

Rotates `v` by shifting every component one position to the left.
Shifting the leftmost component moves it to the end.

#### Parameters

- `v` **[Vec3](#vec3)**&#x20;

#### Examples

```javascript
rotateLeft([0, 1, 2]); // [1, 2, 0]
```

Returns **[Vec3](#vec3)**&#x20;

### rotateRight

Rotates `v` by shifting every component one position to the right.
Shifting the rightmost component moves it to the start.

#### Parameters

- `v` **[Vec3](#vec3)**&#x20;

#### Examples

```javascript
rotateRight([0, 1, 2]); // [2, 0, 1]
```

Returns **[Vec3](#vec3)**&#x20;

### toVec2

Returns a `Vec2` which is just `v` without its z-component.

Useful for generating points in an SVG path or anytime you want to cast a `Vec3` to a 2D space.

#### Parameters

- `v` **[Vec3](#vec3)**&#x20;

#### Examples

```javascript
toVec2([0, 1, 2]); // [0, 1]
```

Returns **[Vec2](#vec2)**&#x20;
