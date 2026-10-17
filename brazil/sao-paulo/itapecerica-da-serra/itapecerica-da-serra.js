// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"itapecerica-da-serra","repository":"america","path":"brazil/sao-paulo/itapecerica-da-serra","depth":3,"parent":"brazil/sao-paulo","children":["recanto-da-floresta"]});
export const childModules = Object.freeze({"recanto-da-floresta":"./recanto-da-floresta/recanto-da-floresta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
