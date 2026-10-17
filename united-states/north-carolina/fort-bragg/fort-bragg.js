// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fort-bragg","repository":"america","path":"united-states/north-carolina/fort-bragg","depth":3,"parent":"united-states/north-carolina","children":["cherbourg","saint-mere-eglise"]});
export const childModules = Object.freeze({"cherbourg":"./cherbourg/cherbourg.js","saint-mere-eglise":"./saint-mere-eglise/saint-mere-eglise.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
