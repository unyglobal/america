// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"colonia-municipal-la-ladrillera","repository":"america","path":"guatemala/baja-verapaz/rabinal/colonia-municipal-la-ladrillera","depth":4,"parent":"guatemala/baja-verapaz/rabinal","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
