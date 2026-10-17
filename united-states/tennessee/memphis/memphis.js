// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"memphis","repository":"america","path":"united-states/tennessee/memphis","depth":3,"parent":"united-states/tennessee","children":["lauderdale-courts"]});
export const childModules = Object.freeze({"lauderdale-courts":"./lauderdale-courts/lauderdale-courts.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
