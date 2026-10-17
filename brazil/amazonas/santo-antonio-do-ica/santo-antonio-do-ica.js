// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santo-antonio-do-ica","repository":"america","path":"brazil/amazonas/santo-antonio-do-ica","depth":3,"parent":"brazil/amazonas","children":["sao-jose","taracua"]});
export const childModules = Object.freeze({"sao-jose":"./sao-jose/sao-jose.js","taracua":"./taracua/taracua.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
