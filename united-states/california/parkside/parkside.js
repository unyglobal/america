// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"parkside","repository":"america","path":"united-states/california/parkside","depth":3,"parent":"united-states/california","children":["central-sunset"]});
export const childModules = Object.freeze({"central-sunset":"./central-sunset/central-sunset.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
