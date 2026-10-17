// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cali","repository":"america","path":"colombia/valle-del-cauca-department/cali","depth":3,"parent":"colombia/valle-del-cauca-department","children":["aranjuez"]});
export const childModules = Object.freeze({"aranjuez":"./aranjuez/aranjuez.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
