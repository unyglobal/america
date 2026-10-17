// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"delaware","repository":"america","path":"united-states/ohio/delaware","depth":3,"parent":"united-states/ohio","children":["bear"]});
export const childModules = Object.freeze({"bear":"./bear/bear.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
