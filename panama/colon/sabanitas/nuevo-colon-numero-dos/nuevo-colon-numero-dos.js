// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nuevo-colon-numero-dos","repository":"america","path":"panama/colon/sabanitas/nuevo-colon-numero-dos","depth":4,"parent":"panama/colon/sabanitas","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
