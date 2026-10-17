// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"beauport","repository":"america","path":"canada/quebec/beauport","depth":3,"parent":"canada/quebec","children":["vieux-bourg"]});
export const childModules = Object.freeze({"vieux-bourg":"./vieux-bourg/vieux-bourg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
