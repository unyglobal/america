// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"langley","repository":"america","path":"canada/british-columbia/langley","depth":3,"parent":"canada/british-columbia","children":["douglas"]});
export const childModules = Object.freeze({"douglas":"./douglas/douglas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
