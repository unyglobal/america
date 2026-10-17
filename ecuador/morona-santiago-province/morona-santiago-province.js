// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"morona-santiago-province","repository":"america","path":"ecuador/morona-santiago-province","depth":2,"parent":"ecuador","children":["macas"]});
export const childModules = Object.freeze({"macas":"./macas/macas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
