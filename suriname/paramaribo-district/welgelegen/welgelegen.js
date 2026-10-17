// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"welgelegen","repository":"america","path":"suriname/paramaribo-district/welgelegen","depth":3,"parent":"suriname/paramaribo-district","children":["naipal"]});
export const childModules = Object.freeze({"naipal":"./naipal/naipal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
