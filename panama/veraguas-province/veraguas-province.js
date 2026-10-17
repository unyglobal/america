// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"veraguas-province","repository":"america","path":"panama/veraguas-province","depth":2,"parent":"panama","children":["santiago-de-veraguas"]});
export const childModules = Object.freeze({"santiago-de-veraguas":"./santiago-de-veraguas/santiago-de-veraguas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
