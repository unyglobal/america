// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bogota-d-c","repository":"america","path":"colombia/bogota-d-c","depth":2,"parent":"colombia","children":["bogota","kennedy"]});
export const childModules = Object.freeze({"bogota":"./bogota/bogota.js","kennedy":"./kennedy/kennedy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
