// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"los-polvorines","repository":"america","path":"argentina/buenos-aires/los-polvorines","depth":3,"parent":"argentina/buenos-aires","children":["villa-suiza"]});
export const childModules = Object.freeze({"villa-suiza":"./villa-suiza/villa-suiza.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
