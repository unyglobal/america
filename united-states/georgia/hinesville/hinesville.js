// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hinesville","repository":"america","path":"united-states/georgia/hinesville","depth":3,"parent":"united-states/georgia","children":["fraser-acres","garden-acres","harrison-heights","pineview","sandy-run"]});
export const childModules = Object.freeze({"fraser-acres":"./fraser-acres/fraser-acres.js","garden-acres":"./garden-acres/garden-acres.js","harrison-heights":"./harrison-heights/harrison-heights.js","pineview":"./pineview/pineview.js","sandy-run":"./sandy-run/sandy-run.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
