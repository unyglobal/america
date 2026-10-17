// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santo-domingo-de-los-tsachilas","repository":"america","path":"ecuador/santo-domingo-de-los-tsachilas","depth":2,"parent":"ecuador","children":["santo-domingo-de-los-colorados"]});
export const childModules = Object.freeze({"santo-domingo-de-los-colorados":"./santo-domingo-de-los-colorados/santo-domingo-de-los-colorados.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
