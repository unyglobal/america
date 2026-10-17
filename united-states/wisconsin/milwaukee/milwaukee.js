// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"milwaukee","repository":"america","path":"united-states/wisconsin/milwaukee","depth":3,"parent":"united-states/wisconsin","children":["historic-third-ward"]});
export const childModules = Object.freeze({"historic-third-ward":"./historic-third-ward/historic-third-ward.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
