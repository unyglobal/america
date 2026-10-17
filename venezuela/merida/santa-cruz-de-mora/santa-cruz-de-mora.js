// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santa-cruz-de-mora","repository":"america","path":"venezuela/merida/santa-cruz-de-mora","depth":3,"parent":"venezuela/merida","children":["la-panueleta"]});
export const childModules = Object.freeze({"la-panueleta":"./la-panueleta/la-panueleta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
