// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fort-collins","repository":"america","path":"united-states/colorado/fort-collins","depth":3,"parent":"united-states/colorado","children":["university-north"]});
export const childModules = Object.freeze({"university-north":"./university-north/university-north.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
