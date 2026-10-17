// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"coari","repository":"america","path":"brazil/amazonas/coari","depth":3,"parent":"brazil/amazonas","children":["oriente"]});
export const childModules = Object.freeze({"oriente":"./oriente/oriente.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
