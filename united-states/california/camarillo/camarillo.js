// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"camarillo","repository":"america","path":"united-states/california/camarillo","depth":3,"parent":"united-states/california","children":["old-town"]});
export const childModules = Object.freeze({"old-town":"./old-town/old-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
