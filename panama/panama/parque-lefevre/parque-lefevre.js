// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"parque-lefevre","repository":"america","path":"panama/panama/parque-lefevre","depth":3,"parent":"panama/panama","children":["urbanizacion-reparto-panama"]});
export const childModules = Object.freeze({"urbanizacion-reparto-panama":"./urbanizacion-reparto-panama/urbanizacion-reparto-panama.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
