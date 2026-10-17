// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tillmans-corner","repository":"america","path":"united-states/alabama/tillmans-corner","depth":3,"parent":"united-states/alabama","children":["suburban-heights"]});
export const childModules = Object.freeze({"suburban-heights":"./suburban-heights/suburban-heights.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
