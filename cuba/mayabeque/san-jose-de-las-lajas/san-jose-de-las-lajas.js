// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-jose-de-las-lajas","repository":"america","path":"cuba/mayabeque/san-jose-de-las-lajas","depth":3,"parent":"cuba/mayabeque","children":["clodomira"]});
export const childModules = Object.freeze({"clodomira":"./clodomira/clodomira.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
