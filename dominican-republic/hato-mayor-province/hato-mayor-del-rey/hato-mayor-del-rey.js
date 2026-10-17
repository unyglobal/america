// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hato-mayor-del-rey","repository":"america","path":"dominican-republic/hato-mayor-province/hato-mayor-del-rey","depth":3,"parent":"dominican-republic/hato-mayor-province","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
