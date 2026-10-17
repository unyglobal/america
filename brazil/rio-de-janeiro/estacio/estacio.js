// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"estacio","repository":"america","path":"brazil/rio-de-janeiro/estacio","depth":3,"parent":"brazil/rio-de-janeiro","children":["teleporto"]});
export const childModules = Object.freeze({"teleporto":"./teleporto/teleporto.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
