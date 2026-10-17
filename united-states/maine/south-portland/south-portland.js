// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-portland","repository":"america","path":"united-states/maine/south-portland","depth":3,"parent":"united-states/maine","children":["ferry-village","willard-square"]});
export const childModules = Object.freeze({"ferry-village":"./ferry-village/ferry-village.js","willard-square":"./willard-square/willard-square.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
