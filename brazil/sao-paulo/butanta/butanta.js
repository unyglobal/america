// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"butanta","repository":"america","path":"brazil/sao-paulo/butanta","depth":3,"parent":"brazil/sao-paulo","children":["instituto-de-biociencias"]});
export const childModules = Object.freeze({"instituto-de-biociencias":"./instituto-de-biociencias/instituto-de-biociencias.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
