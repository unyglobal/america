// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"belize","repository":"america","path":"belize","depth":1,"parent":"","children":["belize-district","cayo-district","orange-walk-district"]});
export const childModules = Object.freeze({"belize-district":"./belize-district/belize-district.js","cayo-district":"./cayo-district/cayo-district.js","orange-walk-district":"./orange-walk-district/orange-walk-district.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
