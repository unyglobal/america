// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"elko","repository":"america","path":"united-states/nevada/elko","depth":3,"parent":"united-states/nevada","children":["ballous-addition"]});
export const childModules = Object.freeze({"ballous-addition":"./ballous-addition/ballous-addition.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
