// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"poa","repository":"america","path":"brazil/sao-paulo/poa","depth":3,"parent":"brazil/sao-paulo","children":["jardim-indaia"]});
export const childModules = Object.freeze({"jardim-indaia":"./jardim-indaia/jardim-indaia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
