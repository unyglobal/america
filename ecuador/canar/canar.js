// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"canar","repository":"america","path":"ecuador/canar","depth":2,"parent":"ecuador","children":["azogues","la-troncal"]});
export const childModules = Object.freeze({"azogues":"./azogues/azogues.js","la-troncal":"./la-troncal/la-troncal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
