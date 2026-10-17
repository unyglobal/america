// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cajamar","repository":"america","path":"brazil/sao-paulo/cajamar","depth":3,"parent":"brazil/sao-paulo","children":["bairro-vila-branca"]});
export const childModules = Object.freeze({"bairro-vila-branca":"./bairro-vila-branca/bairro-vila-branca.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
