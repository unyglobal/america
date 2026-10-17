// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baja-verapaz","repository":"america","path":"guatemala/baja-verapaz","depth":2,"parent":"guatemala","children":["rabinal","salama"]});
export const childModules = Object.freeze({"rabinal":"./rabinal/rabinal.js","salama":"./salama/salama.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
