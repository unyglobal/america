// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"las-flores","repository":"america","path":"mexico/san-luis-potosi/soledad-de-graciano-sanchez/las-flores","depth":4,"parent":"mexico/san-luis-potosi/soledad-de-graciano-sanchez","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
