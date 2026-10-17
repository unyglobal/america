// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arroyo-naranjo","repository":"america","path":"cuba/havana/arroyo-naranjo","depth":3,"parent":"cuba/havana","children":["trigal"]});
export const childModules = Object.freeze({"trigal":"./trigal/trigal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
