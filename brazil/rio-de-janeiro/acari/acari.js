// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"acari","repository":"america","path":"brazil/rio-de-janeiro/acari","depth":3,"parent":"brazil/rio-de-janeiro","children":["parque-acari","vila-esperanca"]});
export const childModules = Object.freeze({"parque-acari":"./parque-acari/parque-acari.js","vila-esperanca":"./vila-esperanca/vila-esperanca.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
