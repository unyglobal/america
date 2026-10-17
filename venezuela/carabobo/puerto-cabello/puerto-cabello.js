// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"puerto-cabello","repository":"america","path":"venezuela/carabobo/puerto-cabello","depth":3,"parent":"venezuela/carabobo","children":["barrio-la-alcantarilla"]});
export const childModules = Object.freeze({"barrio-la-alcantarilla":"./barrio-la-alcantarilla/barrio-la-alcantarilla.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
