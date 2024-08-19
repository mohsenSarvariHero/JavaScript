import { square } from './file2.js';
export function isRightTriangle(a, b, c) {
    return square(a) + square(b) === square(c)
}