// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tia-juana","repository":"america","path":"venezuela/zulia/tia-juana","depth":3,"parent":"venezuela/zulia","children":["taparito"]});
export const childModules = Object.freeze({"taparito":"./taparito/taparito.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
