// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"comuna-13-centroriental","repository":"america","path":"colombia/santander-department/bucaramanga/comuna-13-centroriental","depth":4,"parent":"colombia/santander-department/bucaramanga","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
