// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"youngstown","repository":"america","path":"united-states/ohio/youngstown","depth":3,"parent":"united-states/ohio","children":["mannings-addition"]});
export const childModules = Object.freeze({"mannings-addition":"./mannings-addition/mannings-addition.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
