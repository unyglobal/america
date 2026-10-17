// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"manhuacu","repository":"america","path":"brazil/minas-gerais/manhuacu","depth":3,"parent":"brazil/minas-gerais","children":["morro-das-viuvas"]});
export const childModules = Object.freeze({"morro-das-viuvas":"./morro-das-viuvas/morro-das-viuvas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
