"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toArray = void 0;
function toArray(value, itemMarshaller, strict) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        if (strict) {
            throw new TypeError('\'null\' cannot be converted to an Array');
        }
        return undefined;
    }
    if (Array.isArray(value)) {
        if (itemMarshaller) {
            return value.map(item => itemMarshaller(item, strict));
        }
        return value;
    }
    return [itemMarshaller ? itemMarshaller(value, strict) : value];
}
exports.toArray = toArray;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktbWFyc2hhbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJzaGFsbGVycy9hcnJheS1tYXJzaGFsbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVNBLFNBQWdCLE9BQU8sQ0FBQyxLQUFVLEVBQUUsY0FBc0QsRUFBRSxNQUFnQjtJQUN4RyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7UUFDckIsT0FBTyxTQUFTLENBQUE7S0FDbkI7SUFDRCxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7UUFDaEIsSUFBSSxNQUFNLEVBQUU7WUFDUixNQUFNLElBQUksU0FBUyxDQUFDLDBDQUEwQyxDQUFDLENBQUE7U0FDbEU7UUFFRCxPQUFPLFNBQVMsQ0FBQTtLQUNuQjtJQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN0QixJQUFJLGNBQWMsRUFBRTtZQUNoQixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUE7U0FDekQ7UUFFRCxPQUFPLEtBQUssQ0FBQTtLQUNmO0lBRUQsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDbkUsQ0FBQztBQXJCRCwwQkFxQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbnZlcnRzIGEgSlNPTiB2YWx1ZSB0byBhbiBBcnJheSwgaWYgcG9zc2libGUuXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gdmFsdWUgdG8gY29udmVydCB0byBhIEJvb2xlYW5cbiAqIEBwYXJhbSBpdGVtTWFyc2hhbGxlciAtIGl0ZW0gbWFyc2hhbGxlciBmdW5jdGlvblxuICogQHBhcmFtIHN0cmljdCAtIHdoZW4gdHJ1ZSwgcGFyc2luZyBpcyBzdHJpY3QgYW5kIHRocm93cyBhIFR5cGVFcnJvciBpZiB0aGUgdmFsdWUgY2Fubm90IGJlIGNvbnZlcnRlZFxuICpcbiAqIEByZXR1cm5zIGFuIGFycmF5LCBvZiB0aGUgdmFsdWUsIG9yIHRoZSB2YWx1ZSBpdHNlbGYuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0FycmF5KHZhbHVlOiBhbnksIGl0ZW1NYXJzaGFsbGVyPzogKHZhbHVlOiBhbnksIHN0cmljdD86IGJvb2xlYW4pID0+IGFueSwgc3RyaWN0PzogYm9vbGVhbik6IGFueVtdIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICBpZiAoc3RyaWN0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcXCdudWxsXFwnIGNhbm5vdCBiZSBjb252ZXJ0ZWQgdG8gYW4gQXJyYXknKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBpZiAoaXRlbU1hcnNoYWxsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5tYXAoaXRlbSA9PiBpdGVtTWFyc2hhbGxlcihpdGVtLCBzdHJpY3QpKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIFtpdGVtTWFyc2hhbGxlciA/IGl0ZW1NYXJzaGFsbGVyKHZhbHVlLCBzdHJpY3QpIDogdmFsdWVdXG59XG4iXX0=