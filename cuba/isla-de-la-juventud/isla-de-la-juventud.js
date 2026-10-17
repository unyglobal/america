// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"isla-de-la-juventud","repository":"america","path":"cuba/isla-de-la-juventud","depth":2,"parent":"cuba","children":["nueva-gerona"]});
export const childModules = Object.freeze({"nueva-gerona":"./nueva-gerona/nueva-gerona.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
