// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"city-park-addition","repository":"america","path":"united-states/utah/south-ogden/city-park-addition","depth":4,"parent":"united-states/utah/south-ogden","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
