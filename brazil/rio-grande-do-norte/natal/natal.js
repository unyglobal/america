// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"natal","repository":"america","path":"brazil/rio-grande-do-norte/natal","depth":3,"parent":"brazil/rio-grande-do-norte","children":["alecrim","areado","barro-vermelho","cidade-alta","ocidental-de-baixo","ocidental-de-cima","passo-da-patria"]});
export const childModules = Object.freeze({"alecrim":"./alecrim/alecrim.js","areado":"./areado/areado.js","barro-vermelho":"./barro-vermelho/barro-vermelho.js","cidade-alta":"./cidade-alta/cidade-alta.js","ocidental-de-baixo":"./ocidental-de-baixo/ocidental-de-baixo.js","ocidental-de-cima":"./ocidental-de-cima/ocidental-de-cima.js","passo-da-patria":"./passo-da-patria/passo-da-patria.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
