// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dartmouth","repository":"america","path":"canada/nova-scotia/dartmouth","depth":3,"parent":"canada/nova-scotia","children":["brightwood","harbourview"]});
export const childModules = Object.freeze({"brightwood":"./brightwood/brightwood.js","harbourview":"./harbourview/harbourview.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
