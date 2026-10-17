// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"recanto-da-floresta","repository":"america","path":"brazil/sao-paulo/itapecerica-da-serra/recanto-da-floresta","depth":4,"parent":"brazil/sao-paulo/itapecerica-da-serra","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
