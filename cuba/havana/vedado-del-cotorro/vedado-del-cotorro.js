// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vedado-del-cotorro","repository":"america","path":"cuba/havana/vedado-del-cotorro","depth":3,"parent":"cuba/havana","children":["la-margarita","las-brisas"]});
export const childModules = Object.freeze({"la-margarita":"./la-margarita/la-margarita.js","las-brisas":"./las-brisas/las-brisas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
