// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"brooklyn-heights","repository":"america","path":"united-states/new-york/brooklyn-heights","depth":3,"parent":"united-states/new-york","children":["downtown-brooklyn","dumbo","fulton-ferry"]});
export const childModules = Object.freeze({"downtown-brooklyn":"./downtown-brooklyn/downtown-brooklyn.js","dumbo":"./dumbo/dumbo.js","fulton-ferry":"./fulton-ferry/fulton-ferry.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
