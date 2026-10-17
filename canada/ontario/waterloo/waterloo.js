// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"waterloo","repository":"america","path":"canada/ontario/waterloo","depth":3,"parent":"canada/ontario","children":["central"]});
export const childModules = Object.freeze({"central":"./central/central.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
