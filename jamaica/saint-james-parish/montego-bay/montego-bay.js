// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"montego-bay","repository":"america","path":"jamaica/saint-james-parish/montego-bay","depth":3,"parent":"jamaica/saint-james-parish","children":["montego-bay-craft-market"]});
export const childModules = Object.freeze({"montego-bay-craft-market":"./montego-bay-craft-market/montego-bay-craft-market.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
