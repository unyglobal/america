// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"st-james-assiniboia-east","repository":"america","path":"canada/manitoba/st-james-assiniboia-east","depth":3,"parent":"canada/manitoba","children":["deer-lodge"]});
export const childModules = Object.freeze({"deer-lodge":"./deer-lodge/deer-lodge.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
