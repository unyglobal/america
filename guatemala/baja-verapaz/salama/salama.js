// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"salama","repository":"america","path":"guatemala/baja-verapaz/salama","depth":3,"parent":"guatemala/baja-verapaz","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
