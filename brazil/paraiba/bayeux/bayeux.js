// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bayeux","repository":"america","path":"brazil/paraiba/bayeux","depth":3,"parent":"brazil/paraiba","children":["sao-lourenco"]});
export const childModules = Object.freeze({"sao-lourenco":"./sao-lourenco/sao-lourenco.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
