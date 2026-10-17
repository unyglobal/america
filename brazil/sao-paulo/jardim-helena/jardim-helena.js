// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jardim-helena","repository":"america","path":"brazil/sao-paulo/jardim-helena","depth":3,"parent":"brazil/sao-paulo","children":["jardim-noemia"]});
export const childModules = Object.freeze({"jardim-noemia":"./jardim-noemia/jardim-noemia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
