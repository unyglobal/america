// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciudad-sabinas-hidalgo","repository":"america","path":"mexico/nuevo-leon/ciudad-sabinas-hidalgo","depth":3,"parent":"mexico/nuevo-leon","children":["bellavista","industrial"]});
export const childModules = Object.freeze({"bellavista":"./bellavista/bellavista.js","industrial":"./industrial/industrial.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
