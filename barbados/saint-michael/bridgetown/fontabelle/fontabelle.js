// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fontabelle","repository":"america","path":"barbados/saint-michael/bridgetown/fontabelle","depth":4,"parent":"barbados/saint-michael/bridgetown","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
