// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"itapevi","repository":"america","path":"brazil/sao-paulo/itapevi","depth":3,"parent":"brazil/sao-paulo","children":["jardim-itapua","jardim-portela"]});
export const childModules = Object.freeze({"jardim-itapua":"./jardim-itapua/jardim-itapua.js","jardim-portela":"./jardim-portela/jardim-portela.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
