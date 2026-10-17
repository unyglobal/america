// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jacmel","repository":"america","path":"haiti/sud-est/jacmel","depth":3,"parent":"haiti/sud-est","children":["art-district"]});
export const childModules = Object.freeze({"art-district":"./art-district/art-district.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
