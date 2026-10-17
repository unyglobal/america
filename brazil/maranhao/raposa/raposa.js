// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"raposa","repository":"america","path":"brazil/maranhao/raposa","depth":3,"parent":"brazil/maranhao","children":["cacarape"]});
export const childModules = Object.freeze({"cacarape":"./cacarape/cacarape.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
