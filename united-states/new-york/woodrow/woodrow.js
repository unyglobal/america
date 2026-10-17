// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"woodrow","repository":"america","path":"united-states/new-york/woodrow","depth":3,"parent":"united-states/new-york","children":["huguenot"]});
export const childModules = Object.freeze({"huguenot":"./huguenot/huguenot.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
