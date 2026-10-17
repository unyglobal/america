// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chilibre","repository":"america","path":"panama/panama/chilibre","depth":3,"parent":"panama/panama","children":["llano-verde"]});
export const childModules = Object.freeze({"llano-verde":"./llano-verde/llano-verde.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
