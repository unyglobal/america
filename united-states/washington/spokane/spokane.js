// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"spokane","repository":"america","path":"united-states/washington/spokane","depth":3,"parent":"united-states/washington","children":["peaceful-valley"]});
export const childModules = Object.freeze({"peaceful-valley":"./peaceful-valley/peaceful-valley.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
