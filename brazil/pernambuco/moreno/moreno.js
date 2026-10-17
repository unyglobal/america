// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"moreno","repository":"america","path":"brazil/pernambuco/moreno","depth":3,"parent":"brazil/pernambuco","children":["beira-rio","xingu"]});
export const childModules = Object.freeze({"beira-rio":"./beira-rio/beira-rio.js","xingu":"./xingu/xingu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
