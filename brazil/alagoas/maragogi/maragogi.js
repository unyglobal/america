// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maragogi","repository":"america","path":"brazil/alagoas/maragogi","depth":3,"parent":"brazil/alagoas","children":["alto-da-boa-vista"]});
export const childModules = Object.freeze({"alto-da-boa-vista":"./alto-da-boa-vista/alto-da-boa-vista.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
