// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rabinal","repository":"america","path":"guatemala/baja-verapaz/rabinal","depth":3,"parent":"guatemala/baja-verapaz","children":["colonia-municipal-la-ladrillera"]});
export const childModules = Object.freeze({"colonia-municipal-la-ladrillera":"./colonia-municipal-la-ladrillera/colonia-municipal-la-ladrillera.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
