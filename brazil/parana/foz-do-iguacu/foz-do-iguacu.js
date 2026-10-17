// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"foz-do-iguacu","repository":"america","path":"brazil/parana/foz-do-iguacu","depth":3,"parent":"brazil/parana","children":["cemiterio"]});
export const childModules = Object.freeze({"cemiterio":"./cemiterio/cemiterio.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
