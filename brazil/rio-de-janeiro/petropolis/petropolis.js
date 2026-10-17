// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"petropolis","repository":"america","path":"brazil/rio-de-janeiro/petropolis","depth":3,"parent":"brazil/rio-de-janeiro","children":["centro-historico-de-petropolis"]});
export const childModules = Object.freeze({"centro-historico-de-petropolis":"./centro-historico-de-petropolis/centro-historico-de-petropolis.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
