// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"otavalo","repository":"america","path":"ecuador/imbabura/otavalo","depth":3,"parent":"ecuador/imbabura","children":["cardon-bajo"]});
export const childModules = Object.freeze({"cardon-bajo":"./cardon-bajo/cardon-bajo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
