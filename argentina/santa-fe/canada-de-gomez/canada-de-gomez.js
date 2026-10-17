// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"canada-de-gomez","repository":"america","path":"argentina/santa-fe/canada-de-gomez","depth":3,"parent":"argentina/santa-fe","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
