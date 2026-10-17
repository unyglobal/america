// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cuautlancingo","repository":"america","path":"mexico/puebla/cuautlancingo","depth":3,"parent":"mexico/puebla","children":["villas-san-juan"]});
export const childModules = Object.freeze({"villas-san-juan":"./villas-san-juan/villas-san-juan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
