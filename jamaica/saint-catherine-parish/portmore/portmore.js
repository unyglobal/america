// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"portmore","repository":"america","path":"jamaica/saint-catherine-parish/portmore","depth":3,"parent":"jamaica/saint-catherine-parish","children":["willow-meadows"]});
export const childModules = Object.freeze({"willow-meadows":"./willow-meadows/willow-meadows.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
