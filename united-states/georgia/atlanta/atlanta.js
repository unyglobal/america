// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"atlanta","repository":"america","path":"united-states/georgia/atlanta","depth":3,"parent":"united-states/georgia","children":["capitol-homes"]});
export const childModules = Object.freeze({"capitol-homes":"./capitol-homes/capitol-homes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
