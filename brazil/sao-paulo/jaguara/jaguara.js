// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jaguara","repository":"america","path":"brazil/sao-paulo/jaguara","depth":3,"parent":"brazil/sao-paulo","children":["jardim-santo-elias"]});
export const childModules = Object.freeze({"jardim-santo-elias":"./jardim-santo-elias/jardim-santo-elias.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
