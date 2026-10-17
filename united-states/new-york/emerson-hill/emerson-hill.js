// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"emerson-hill","repository":"america","path":"united-states/new-york/emerson-hill","depth":3,"parent":"united-states/new-york","children":["concord","grasmere"]});
export const childModules = Object.freeze({"concord":"./concord/concord.js","grasmere":"./grasmere/grasmere.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
