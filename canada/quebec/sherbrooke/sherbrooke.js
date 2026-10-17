// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sherbrooke","repository":"america","path":"canada/quebec/sherbrooke","depth":3,"parent":"canada/quebec","children":["le-vieux-nord"]});
export const childModules = Object.freeze({"le-vieux-nord":"./le-vieux-nord/le-vieux-nord.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
