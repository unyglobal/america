// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"laguna","repository":"america","path":"united-states/california/laguna","depth":3,"parent":"united-states/california","children":["laguna-historical"]});
export const childModules = Object.freeze({"laguna-historical":"./laguna-historical/laguna-historical.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
