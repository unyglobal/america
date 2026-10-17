// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rio-abajo","repository":"america","path":"panama/panama/rio-abajo","depth":3,"parent":"panama/panama","children":["villa-elena"]});
export const childModules = Object.freeze({"villa-elena":"./villa-elena/villa-elena.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
