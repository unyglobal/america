// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"near-south-side","repository":"america","path":"united-states/illinois/near-south-side","depth":3,"parent":"united-states/illinois","children":["central-station"]});
export const childModules = Object.freeze({"central-station":"./central-station/central-station.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
