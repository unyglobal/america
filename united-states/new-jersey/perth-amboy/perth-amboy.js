// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"perth-amboy","repository":"america","path":"united-states/new-jersey/perth-amboy","depth":3,"parent":"united-states/new-jersey","children":["harbor-terrace"]});
export const childModules = Object.freeze({"harbor-terrace":"./harbor-terrace/harbor-terrace.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
