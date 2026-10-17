// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bocas-del-toro-province","repository":"america","path":"panama/bocas-del-toro-province","depth":2,"parent":"panama","children":["changuinola"]});
export const childModules = Object.freeze({"changuinola":"./changuinola/changuinola.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
