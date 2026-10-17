// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jequie","repository":"america","path":"brazil/bahia/jequie","depth":3,"parent":"brazil/bahia","children":["campo-do-america"]});
export const childModules = Object.freeze({"campo-do-america":"./campo-do-america/campo-do-america.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
