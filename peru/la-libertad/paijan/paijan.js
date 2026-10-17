// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"paijan","repository":"america","path":"peru/la-libertad/paijan","depth":3,"parent":"peru/la-libertad","children":["manco-capac","miraflores"]});
export const childModules = Object.freeze({"manco-capac":"./manco-capac/manco-capac.js","miraflores":"./miraflores/miraflores.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
