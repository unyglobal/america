// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"camacari","repository":"america","path":"brazil/bahia/camacari","depth":3,"parent":"brazil/bahia","children":["centro"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
