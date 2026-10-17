// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"teloloapan","repository":"america","path":"mexico/guerrero/teloloapan","depth":3,"parent":"mexico/guerrero","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
