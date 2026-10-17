// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santo-domingo-de-los-colorados","repository":"america","path":"ecuador/santo-domingo-de-los-tsachilas/santo-domingo-de-los-colorados","depth":3,"parent":"ecuador/santo-domingo-de-los-tsachilas","children":["bomboli"]});
export const childModules = Object.freeze({"bomboli":"./bomboli/bomboli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
