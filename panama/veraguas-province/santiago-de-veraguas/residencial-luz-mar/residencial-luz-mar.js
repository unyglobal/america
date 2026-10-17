// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"residencial-luz-mar","repository":"america","path":"panama/veraguas-province/santiago-de-veraguas/residencial-luz-mar","depth":4,"parent":"panama/veraguas-province/santiago-de-veraguas","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
