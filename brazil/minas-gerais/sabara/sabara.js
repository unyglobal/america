// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sabara","repository":"america","path":"brazil/minas-gerais/sabara","depth":3,"parent":"brazil/minas-gerais","children":["alto-cabral"]});
export const childModules = Object.freeze({"alto-cabral":"./alto-cabral/alto-cabral.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
