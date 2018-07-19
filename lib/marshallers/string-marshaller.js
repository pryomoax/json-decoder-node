"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toString(value, strict = false) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        if (strict) {
            throw new TypeError('\'null\' cannot be converted to a String');
        }
        return undefined;
    }
    if (Array.isArray(value)) {
        if (strict) {
            throw new TypeError(`'${value}' does not represent a Boolean`);
        }
        if (value.length > 0) {
            return toString(value[0], strict);
        }
        else {
            return undefined;
        }
    }
    if (typeof value === 'string') {
        return value;
    }
    return value.toString();
}
exports.toString = toString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLW1hcnNoYWxsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWFyc2hhbGxlcnMvc3RyaW5nLW1hcnNoYWxsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRQSxrQkFBeUIsS0FBVSxFQUFFLFNBQWtCLEtBQUs7SUFDeEQsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1FBQ3JCLE9BQU8sU0FBUyxDQUFBO0tBQ25CO0lBRUQsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1FBQ2hCLElBQUksTUFBTSxFQUFFO1lBQ1IsTUFBTSxJQUFJLFNBQVMsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFBO1NBQ2xFO1FBRUQsT0FBTyxTQUFTLENBQUE7S0FDbkI7SUFHRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdEIsSUFBSSxNQUFNLEVBQUU7WUFDUixNQUFNLElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxnQ0FBZ0MsQ0FBQyxDQUFBO1NBQ2pFO1FBRUQsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNsQixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUE7U0FDcEM7YUFBTTtZQUNILE9BQU8sU0FBUyxDQUFBO1NBQ25CO0tBQ0o7SUFFRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUMzQixPQUFPLEtBQUssQ0FBQTtLQUNmO0lBRUQsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUE7QUFDM0IsQ0FBQztBQS9CRCw0QkErQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbnZlcnRzIGEgSlNPTiB2YWx1ZSB0byBhIFN0cmluZywgaWYgcG9zc2libGVcbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBhIHZhbHVlIHRvIGNvbnZlcnQgdG8gYSBzdHJpbmdcbiAqIEBwYXJhbSBzdHJpY3QgLSB3aGVuIHRydWUsIHBhcnNpbmcgaXMgc3RyaWN0IGFuZCB0aHJvd3MgYSBUeXBlRXJyb3IgaWYgdGhlIHZhbHVlIGNhbm5vdCBiZSBjb252ZXJ0ZWRcbiAqXG4gKiBAcmV0dXJuIEEgc3RyaW5nLCBvciB1bmRlZmluZWQgaWYgdGhlIHZhbHVlIGNvdWxkIG5vdCBiZSBjb252ZXJ0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlOiBhbnksIHN0cmljdDogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1xcJ251bGxcXCcgY2Fubm90IGJlIGNvbnZlcnRlZCB0byBhIFN0cmluZycpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgLy8gRXh0cmFjdCAwIGluZGV4IG9mIGFuIGFycmF5XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCcke3ZhbHVlfScgZG9lcyBub3QgcmVwcmVzZW50IGEgQm9vbGVhbmApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRvU3RyaW5nKHZhbHVlWzBdLCBzdHJpY3QpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxufVxuIl19