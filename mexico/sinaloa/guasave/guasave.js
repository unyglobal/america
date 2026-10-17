// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guasave","repository":"america","path":"mexico/sinaloa/guasave","depth":3,"parent":"mexico/sinaloa","children":["centro","colonia-del-bosque","ermita"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","colonia-del-bosque":"./colonia-del-bosque/colonia-del-bosque.js","ermita":"./ermita/ermita.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
