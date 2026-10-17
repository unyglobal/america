// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kingstown","repository":"america","path":"saint-vincent-and-the-grenadines/saint-george-parish/kingstown","depth":3,"parent":"saint-vincent-and-the-grenadines/saint-george-parish","children":["frenches","rose-place","sion-hill"]});
export const childModules = Object.freeze({"frenches":"./frenches/frenches.js","rose-place":"./rose-place/rose-place.js","sion-hill":"./sion-hill/sion-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
