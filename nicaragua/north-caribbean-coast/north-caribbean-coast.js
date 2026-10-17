// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-caribbean-coast","repository":"america","path":"nicaragua/north-caribbean-coast","depth":2,"parent":"nicaragua","children":["puerto-cabezas","siuna"]});
export const childModules = Object.freeze({"puerto-cabezas":"./puerto-cabezas/puerto-cabezas.js","siuna":"./siuna/siuna.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
