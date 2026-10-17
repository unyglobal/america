// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jesus-menendez","repository":"america","path":"cuba/las-tunas-province/jesus-menendez","depth":3,"parent":"cuba/las-tunas-province","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
