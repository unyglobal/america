// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sao-lourenco-da-mata","repository":"america","path":"brazil/pernambuco/sao-lourenco-da-mata","depth":3,"parent":"brazil/pernambuco","children":["beira-rio","sao-joao-e-sao-paulo"]});
export const childModules = Object.freeze({"beira-rio":"./beira-rio/beira-rio.js","sao-joao-e-sao-paulo":"./sao-joao-e-sao-paulo/sao-joao-e-sao-paulo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
