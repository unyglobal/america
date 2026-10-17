// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"itaquaquecetuba","repository":"america","path":"brazil/sao-paulo/itaquaquecetuba","depth":3,"parent":"brazil/sao-paulo","children":["monte-branco"]});
export const childModules = Object.freeze({"monte-branco":"./monte-branco/monte-branco.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
