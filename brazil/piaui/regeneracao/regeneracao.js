// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"regeneracao","repository":"america","path":"brazil/piaui/regeneracao","depth":3,"parent":"brazil/piaui","children":["alto-do-balanco","centro"]});
export const childModules = Object.freeze({"alto-do-balanco":"./alto-do-balanco/alto-do-balanco.js","centro":"./centro/centro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
