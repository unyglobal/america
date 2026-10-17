// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"camaragibe","repository":"america","path":"brazil/pernambuco/camaragibe","depth":3,"parent":"brazil/pernambuco","children":["buraco-fundo"]});
export const childModules = Object.freeze({"buraco-fundo":"./buraco-fundo/buraco-fundo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
