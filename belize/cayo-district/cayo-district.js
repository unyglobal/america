// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cayo-district","repository":"america","path":"belize/cayo-district","depth":2,"parent":"belize","children":["san-ignacio"]});
export const childModules = Object.freeze({"san-ignacio":"./san-ignacio/san-ignacio.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
