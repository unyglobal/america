// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"colon","repository":"america","path":"panama/colon","depth":2,"parent":"panama","children":["cativa","sabanitas"]});
export const childModules = Object.freeze({"cativa":"./cativa/cativa.js","sabanitas":"./sabanitas/sabanitas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
