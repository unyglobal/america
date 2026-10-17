// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rio-grande-da-serra","repository":"america","path":"brazil/sao-paulo/rio-grande-da-serra","depth":3,"parent":"brazil/sao-paulo","children":["bairro-oasis-paulista"]});
export const childModules = Object.freeze({"bairro-oasis-paulista":"./bairro-oasis-paulista/bairro-oasis-paulista.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
