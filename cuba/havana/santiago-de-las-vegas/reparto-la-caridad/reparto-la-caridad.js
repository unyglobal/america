// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"reparto-la-caridad","repository":"america","path":"cuba/havana/santiago-de-las-vegas/reparto-la-caridad","depth":4,"parent":"cuba/havana/santiago-de-las-vegas","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
