// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"farragut","repository":"america","path":"united-states/tennessee/farragut","depth":3,"parent":"united-states/tennessee","children":["woodland-trace"]});
export const childModules = Object.freeze({"woodland-trace":"./woodland-trace/woodland-trace.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
