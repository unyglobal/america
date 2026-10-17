// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santiago-de-las-vegas","repository":"america","path":"cuba/havana/santiago-de-las-vegas","depth":3,"parent":"cuba/havana","children":["reparto-la-caridad","reparto-tessie"]});
export const childModules = Object.freeze({"reparto-la-caridad":"./reparto-la-caridad/reparto-la-caridad.js","reparto-tessie":"./reparto-tessie/reparto-tessie.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
