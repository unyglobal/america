// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"novi","repository":"america","path":"united-states/michigan/novi","depth":3,"parent":"united-states/michigan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
