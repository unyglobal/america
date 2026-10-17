// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"villa-hayes","repository":"america","path":"paraguay/presidente-hayes/villa-hayes","depth":3,"parent":"paraguay/presidente-hayes","children":["alonso"]});
export const childModules = Object.freeze({"alonso":"./alonso/alonso.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
