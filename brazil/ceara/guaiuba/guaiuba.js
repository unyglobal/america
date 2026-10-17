// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guaiuba","repository":"america","path":"brazil/ceara/guaiuba","depth":3,"parent":"brazil/ceara","children":["alto-do-cemiterio"]});
export const childModules = Object.freeze({"alto-do-cemiterio":"./alto-do-cemiterio/alto-do-cemiterio.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
