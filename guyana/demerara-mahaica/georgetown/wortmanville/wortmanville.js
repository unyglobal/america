// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wortmanville","repository":"america","path":"guyana/demerara-mahaica/georgetown/wortmanville","depth":4,"parent":"guyana/demerara-mahaica/georgetown","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
