/**
 * Extends given object with guven prototype
 * @param {object} thisArg
 * @param {object} prototype
 */
export default function setPrototype(thisArg, prototype) {
    Object.setPrototypeOf(prototype, Object.getPrototypeOf(thisArg));
    Object.setPrototypeOf(thisArg, prototype);
}
