// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"colton","repository":"america","path":"united-states/california/colton","depth":3,"parent":"united-states/california","children":["bethune"]});
export const childModules = Object.freeze({"bethune":"./bethune/bethune.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
