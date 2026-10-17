// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saint-vincent-and-the-grenadines","repository":"america","path":"saint-vincent-and-the-grenadines","depth":1,"parent":"","children":["saint-george-parish"]});
export const childModules = Object.freeze({"saint-george-parish":"./saint-george-parish/saint-george-parish.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
