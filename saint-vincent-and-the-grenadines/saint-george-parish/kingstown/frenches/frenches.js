// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"frenches","repository":"america","path":"saint-vincent-and-the-grenadines/saint-george-parish/kingstown/frenches","depth":4,"parent":"saint-vincent-and-the-grenadines/saint-george-parish/kingstown","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
