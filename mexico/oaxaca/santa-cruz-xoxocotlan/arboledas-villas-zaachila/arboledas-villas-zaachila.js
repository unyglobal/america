// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arboledas-villas-zaachila","repository":"america","path":"mexico/oaxaca/santa-cruz-xoxocotlan/arboledas-villas-zaachila","depth":4,"parent":"mexico/oaxaca/santa-cruz-xoxocotlan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
