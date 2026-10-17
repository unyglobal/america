// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sao-rafael","repository":"america","path":"brazil/sao-paulo/sao-rafael","depth":3,"parent":"brazil/sao-paulo","children":["jardim-santo-andre"]});
export const childModules = Object.freeze({"jardim-santo-andre":"./jardim-santo-andre/jardim-santo-andre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
