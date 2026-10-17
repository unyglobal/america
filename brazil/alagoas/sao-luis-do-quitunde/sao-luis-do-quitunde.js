// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sao-luis-do-quitunde","repository":"america","path":"brazil/alagoas/sao-luis-do-quitunde","depth":3,"parent":"brazil/alagoas","children":["alto-redentor","quitunde"]});
export const childModules = Object.freeze({"alto-redentor":"./alto-redentor/alto-redentor.js","quitunde":"./quitunde/quitunde.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
