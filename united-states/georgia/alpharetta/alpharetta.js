// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"alpharetta","repository":"america","path":"united-states/georgia/alpharetta","depth":3,"parent":"united-states/georgia","children":["village-green"]});
export const childModules = Object.freeze({"village-green":"./village-green/village-green.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
