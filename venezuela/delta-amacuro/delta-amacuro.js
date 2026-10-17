// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"delta-amacuro","repository":"america","path":"venezuela/delta-amacuro","depth":2,"parent":"venezuela","children":["tucupita"]});
export const childModules = Object.freeze({"tucupita":"./tucupita/tucupita.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
