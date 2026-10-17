// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"les-coteaux","repository":"america","path":"canada/quebec/les-coteaux","depth":3,"parent":"canada/quebec","children":["coteau-station"]});
export const childModules = Object.freeze({"coteau-station":"./coteau-station/coteau-station.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
