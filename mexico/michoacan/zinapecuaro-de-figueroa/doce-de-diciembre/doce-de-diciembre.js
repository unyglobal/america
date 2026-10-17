// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"doce-de-diciembre","repository":"america","path":"mexico/michoacan/zinapecuaro-de-figueroa/doce-de-diciembre","depth":4,"parent":"mexico/michoacan/zinapecuaro-de-figueroa","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
