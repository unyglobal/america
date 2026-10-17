// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"painesville","repository":"america","path":"united-states/ohio/painesville","depth":3,"parent":"united-states/ohio","children":["avery-terrace","lusard-place","the-highland"]});
export const childModules = Object.freeze({"avery-terrace":"./avery-terrace/avery-terrace.js","lusard-place":"./lusard-place/lusard-place.js","the-highland":"./the-highland/the-highland.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
