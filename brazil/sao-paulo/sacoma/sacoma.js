// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sacoma","repository":"america","path":"brazil/sao-paulo/sacoma","depth":3,"parent":"brazil/sao-paulo","children":["sao-joao-climaco"]});
export const childModules = Object.freeze({"sao-joao-climaco":"./sao-joao-climaco/sao-joao-climaco.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
