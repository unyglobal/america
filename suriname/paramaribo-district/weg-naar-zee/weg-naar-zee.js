// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"weg-naar-zee","repository":"america","path":"suriname/paramaribo-district/weg-naar-zee","depth":3,"parent":"suriname/paramaribo-district","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
