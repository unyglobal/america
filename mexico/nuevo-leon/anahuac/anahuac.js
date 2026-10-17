// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"anahuac","repository":"america","path":"mexico/nuevo-leon/anahuac","depth":3,"parent":"mexico/nuevo-leon","children":["obrera","revolucion"]});
export const childModules = Object.freeze({"obrera":"./obrera/obrera.js","revolucion":"./revolucion/revolucion.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
