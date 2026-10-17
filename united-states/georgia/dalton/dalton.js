// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dalton","repository":"america","path":"united-states/georgia/dalton","depth":3,"parent":"united-states/georgia","children":["cannon-heights"]});
export const childModules = Object.freeze({"cannon-heights":"./cannon-heights/cannon-heights.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
