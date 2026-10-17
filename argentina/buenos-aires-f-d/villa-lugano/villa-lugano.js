// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"villa-lugano","repository":"america","path":"argentina/buenos-aires-f-d/villa-lugano","depth":3,"parent":"argentina/buenos-aires-f-d","children":["luis-j-garcia","tellier"]});
export const childModules = Object.freeze({"luis-j-garcia":"./luis-j-garcia/luis-j-garcia.js","tellier":"./tellier/tellier.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
