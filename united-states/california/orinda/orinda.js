// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"orinda","repository":"america","path":"united-states/california/orinda","depth":3,"parent":"united-states/california","children":["knickerbocker","monterey-terrace","orindawoods","overhill"]});
export const childModules = Object.freeze({"knickerbocker":"./knickerbocker/knickerbocker.js","monterey-terrace":"./monterey-terrace/monterey-terrace.js","orindawoods":"./orindawoods/orindawoods.js","overhill":"./overhill/overhill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
