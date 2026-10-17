// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"american-canyon","repository":"america","path":"united-states/california/american-canyon","depth":3,"parent":"united-states/california","children":["lowell"]});
export const childModules = Object.freeze({"lowell":"./lowell/lowell.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
