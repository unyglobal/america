// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tunapuna-piarco","repository":"america","path":"trinidad-and-tobago/tunapuna-piarco","depth":2,"parent":"trinidad-and-tobago","children":["paradise","tunapuna"]});
export const childModules = Object.freeze({"paradise":"./paradise/paradise.js","tunapuna":"./tunapuna/tunapuna.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
