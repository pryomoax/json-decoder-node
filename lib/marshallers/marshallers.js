"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionMarshallerForType = exports.marshallerForType = void 0;
const url_1 = require("url");
const array_marshaller_1 = require("./array-marshaller");
const boolean_marshaller_1 = require("./boolean-marshaller");
const date_marshaller_1 = require("./date-marshaller");
const map_marshaller_1 = require("./map-marshaller");
const number_marshaller_1 = require("./number-marshaller");
const object_marshaller_1 = require("./object-marshaller");
const set_marshaller_1 = require("./set-marshaller");
const string_marshaller_1 = require("./string-marshaller");
const url_marshaller_1 = require("./url-marshaller");
const marshallers = new Map();
marshallers.set(Boolean, boolean_marshaller_1.toBoolean);
marshallers.set(Date, date_marshaller_1.toDate);
marshallers.set(Number, number_marshaller_1.toNumber);
marshallers.set(Object, object_marshaller_1.toObject);
marshallers.set(String, string_marshaller_1.toString);
marshallers.set(url_1.URL, url_marshaller_1.toURL);
const collectionMarshallers = new Map();
collectionMarshallers.set(Array, array_marshaller_1.toArray);
collectionMarshallers.set(Map, map_marshaller_1.toMap);
collectionMarshallers.set(Set, set_marshaller_1.toSet);
collectionMarshallers.forEach((marshaller, key) => {
    marshallers.set(key, convertCollectionMarshallerToMarshaller(marshaller));
});
function marshallerForType(type) {
    return marshallers.get(type);
}
exports.marshallerForType = marshallerForType;
function collectionMarshallerForType(type) {
    return collectionMarshallers.get(type);
}
exports.collectionMarshallerForType = collectionMarshallerForType;
function convertCollectionMarshallerToMarshaller(marshaller) {
    return (value, strict) => {
        return marshaller(value, (item) => item, strict);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyc2hhbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWFyc2hhbGxlcnMvbWFyc2hhbGxlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsNkJBQXlCO0FBR3pCLHlEQUE0QztBQUM1Qyw2REFBZ0Q7QUFDaEQsdURBQTBDO0FBQzFDLHFEQUF3QztBQUN4QywyREFBOEM7QUFDOUMsMkRBQThDO0FBQzlDLHFEQUF3QztBQUN4QywyREFBOEM7QUFDOUMscURBQXdDO0FBR3hDLE1BQU0sV0FBVyxHQUFHLElBQUksR0FBRyxFQUErQyxDQUFBO0FBQzFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLDhCQUFTLENBQUMsQ0FBQTtBQUNuQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSx3QkFBTSxDQUFDLENBQUE7QUFDN0IsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsNEJBQVEsQ0FBQyxDQUFBO0FBQ2pDLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLDRCQUFRLENBQUMsQ0FBQTtBQUNqQyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSw0QkFBUSxDQUFDLENBQUE7QUFDakMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFHLEVBQUUsc0JBQUssQ0FBQyxDQUFBO0FBRzNCLE1BQU0scUJBQXFCLEdBQUcsSUFBSSxHQUFHLEVBQXlELENBQUE7QUFDOUYscUJBQXFCLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSwwQkFBTyxDQUFDLENBQUE7QUFDekMscUJBQXFCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxzQkFBSyxDQUFDLENBQUE7QUFDckMscUJBQXFCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxzQkFBSyxDQUFDLENBQUE7QUFHckMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBd0MsRUFBRSxHQUE0QixFQUFFLEVBQUU7SUFDckcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsdUNBQXVDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtBQUM3RSxDQUFDLENBQUMsQ0FBQTtBQWVGLFNBQWdCLGlCQUFpQixDQUFDLElBQTZCO0lBQzNELE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNoQyxDQUFDO0FBRkQsOENBRUM7QUFlRCxTQUFnQiwyQkFBMkIsQ0FBQyxJQUE2QjtJQUNyRSxPQUFPLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUMxQyxDQUFDO0FBRkQsa0VBRUM7QUFRRCxTQUFTLHVDQUF1QyxDQUFDLFVBQXdDO0lBQ3JGLE9BQU8sQ0FBQyxLQUFVLEVBQUUsTUFBZ0IsRUFBTyxFQUFFO1FBQ3pDLE9BQU8sVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ3BELENBQUMsQ0FBQTtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlZ2lzdGVyeSBvZiB0eXBlcyB0byBhc3NvY2lhdGVkIG1hcnNoYWxsZXJzXG4gKi9cblxuaW1wb3J0IHsgVVJMIH0gZnJvbSAndXJsJ1xuXG5pbXBvcnQgeyBEZWNvZGVyUHJvdG90eXBhbFRhcmdldCB9IGZyb20gJy4uL2RlY29kZXIvZGVjb2Rlci1kZWNsYXJhdGlvbnMnXG5pbXBvcnQgeyB0b0FycmF5IH0gZnJvbSAnLi9hcnJheS1tYXJzaGFsbGVyJ1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi9ib29sZWFuLW1hcnNoYWxsZXInXG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tICcuL2RhdGUtbWFyc2hhbGxlcidcbmltcG9ydCB7IHRvTWFwIH0gZnJvbSAnLi9tYXAtbWFyc2hhbGxlcidcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnLi9udW1iZXItbWFyc2hhbGxlcidcbmltcG9ydCB7IHRvT2JqZWN0IH0gZnJvbSAnLi9vYmplY3QtbWFyc2hhbGxlcidcbmltcG9ydCB7IHRvU2V0IH0gZnJvbSAnLi9zZXQtbWFyc2hhbGxlcidcbmltcG9ydCB7IHRvU3RyaW5nIH0gZnJvbSAnLi9zdHJpbmctbWFyc2hhbGxlcidcbmltcG9ydCB7IHRvVVJMIH0gZnJvbSAnLi91cmwtbWFyc2hhbGxlcidcblxuLy8gTWFyc2hhbGxlciBmdW5jdGlvbiBtYXBcbmNvbnN0IG1hcnNoYWxsZXJzID0gbmV3IE1hcDxEZWNvZGVyUHJvdG90eXBhbFRhcmdldCwgTWFyc2hhbGxlckZ1bmN0aW9uPigpXG5tYXJzaGFsbGVycy5zZXQoQm9vbGVhbiwgdG9Cb29sZWFuKVxubWFyc2hhbGxlcnMuc2V0KERhdGUsIHRvRGF0ZSlcbm1hcnNoYWxsZXJzLnNldChOdW1iZXIsIHRvTnVtYmVyKVxubWFyc2hhbGxlcnMuc2V0KE9iamVjdCwgdG9PYmplY3QpXG5tYXJzaGFsbGVycy5zZXQoU3RyaW5nLCB0b1N0cmluZylcbm1hcnNoYWxsZXJzLnNldChVUkwsIHRvVVJMKVxuXG4vLyBDb2xsZWN0aW9uIG1hcnNoYWxsZXIgZnVuY3Rpb24gbWFwXG5jb25zdCBjb2xsZWN0aW9uTWFyc2hhbGxlcnMgPSBuZXcgTWFwPERlY29kZXJQcm90b3R5cGFsVGFyZ2V0LCBDb2xsZWN0aW9uTWFyc2hhbGxlckZ1bmN0aW9uPigpXG5jb2xsZWN0aW9uTWFyc2hhbGxlcnMuc2V0KEFycmF5LCB0b0FycmF5KVxuY29sbGVjdGlvbk1hcnNoYWxsZXJzLnNldChNYXAsIHRvTWFwKVxuY29sbGVjdGlvbk1hcnNoYWxsZXJzLnNldChTZXQsIHRvU2V0KVxuXG4vLyBDb252ZXJ0IGNvbGxlY3Rpb24gbWFyc2hhbGxlciB0byByZWd1bGFyIG1hcnNoYWxsZXJzIGZvciB0eXBlIG1hcnNoYWxsaW5nIHdpdGhvdXQgaXRlbSBtYXJzaGFsbGluZ1xuY29sbGVjdGlvbk1hcnNoYWxsZXJzLmZvckVhY2goKG1hcnNoYWxsZXI6IENvbGxlY3Rpb25NYXJzaGFsbGVyRnVuY3Rpb24sIGtleTogRGVjb2RlclByb3RvdHlwYWxUYXJnZXQpID0+IHtcbiAgICBtYXJzaGFsbGVycy5zZXQoa2V5LCBjb252ZXJ0Q29sbGVjdGlvbk1hcnNoYWxsZXJUb01hcnNoYWxsZXIobWFyc2hhbGxlcikpXG59KVxuXG4vKipcbiAqIEZ1bmN0aW9uIGludGVyZmFjZSBmb3Igc2ltcGxlIG1hcnNoYWxsZXJzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFyc2hhbGxlckZ1bmN0aW9uIHtcbiAgICAodmFsdWU6IGFueSwgc3RyaWN0PzogYm9vbGVhbik6IGFueVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBtYXJzaGFsbGVyIGZ1bmN0aW9uIGZvciBhIGdpdmVuIHR5cGVcbiAqXG4gKiBAcGFyYW0gdHlwZSAtIFR5cGUgdG8gcmV0dXJuIGEgbWFyc2hhbGxlciBmb3JcbiAqIEByZXR1cm5zIG1hcnNoYWxsZXIgZnVuY3Rpb24gb3IgdW5kZWZpbmVkIGlmIG5vdCBidWlsdC1pblxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFyc2hhbGxlckZvclR5cGUodHlwZTogRGVjb2RlclByb3RvdHlwYWxUYXJnZXQpOiAoKHZhbHVlOiBhbnksIHN0cmljdD86IGJvb2xlYW4pID0+IGFueSkgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiBtYXJzaGFsbGVycy5nZXQodHlwZSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiBpbnRlcmZhY2UgZm9yIGNvbGxlY3Rpb24gYmFzZWQgbWFyc2hhbGxlcnNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb2xsZWN0aW9uTWFyc2hhbGxlckZ1bmN0aW9uIHtcbiAgICAodmFsdWU6IGFueSwgaXRlbU1hcnNoYWxsZXI/OiAodmFsdWU6IGFueSwgc3RyaWN0PzogYm9vbGVhbikgPT4gYW55LCBzdHJpY3Q/OiBib29sZWFuKTogYW55XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGNvbGxlY3Rpb24gbWFyc2hhbGxlciBmdW5jdGlvbiBmb3IgYSBnaXZlbiB0eXBlXG4gKlxuICogQHBhcmFtIHR5cGUgLSBUeXBlIHRvIHJldHVybiBhIG1hcnNoYWxsZXIgZm9yXG4gKiBAcmV0dXJucyBtYXJzaGFsbGVyIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZCBpZiBub3QgYnVpbHQtaW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbGxlY3Rpb25NYXJzaGFsbGVyRm9yVHlwZSh0eXBlOiBEZWNvZGVyUHJvdG90eXBhbFRhcmdldCk6IENvbGxlY3Rpb25NYXJzaGFsbGVyRnVuY3Rpb24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiBjb2xsZWN0aW9uTWFyc2hhbGxlcnMuZ2V0KHR5cGUpXG59XG5cbi8qKlxuICogQ29udmVydHMgYSBjb2xsZWN0aW9uIG1hcnNoYWxsZXIgdG8gYSBzdGFuZGFyZCBtYXJzaGFsbGVyIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIG1hcnNoYWxsZXIgLSBjb2xsZWN0aW9uIG1hcnNoYWxsZXIgdG8gY29udmVydFxuICogQHJldHVybiBub24gY29sbGVjdGlvbiBtYXJzaGFsbGVyIGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRDb2xsZWN0aW9uTWFyc2hhbGxlclRvTWFyc2hhbGxlcihtYXJzaGFsbGVyOiBDb2xsZWN0aW9uTWFyc2hhbGxlckZ1bmN0aW9uKTogTWFyc2hhbGxlckZ1bmN0aW9uIHtcbiAgICByZXR1cm4gKHZhbHVlOiBhbnksIHN0cmljdD86IGJvb2xlYW4pOiBhbnkgPT4ge1xuICAgICAgICByZXR1cm4gbWFyc2hhbGxlcih2YWx1ZSwgKGl0ZW0pID0+IGl0ZW0sIHN0cmljdClcbiAgICB9XG59Il19