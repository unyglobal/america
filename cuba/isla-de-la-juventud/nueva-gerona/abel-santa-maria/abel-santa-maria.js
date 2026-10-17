// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"abel-santa-maria","repository":"america","path":"cuba/isla-de-la-juventud/nueva-gerona/abel-santa-maria","depth":4,"parent":"cuba/isla-de-la-juventud/nueva-gerona","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
