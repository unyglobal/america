// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tumbes","repository":"america","path":"peru/tumbes","depth":2,"parent":"peru","children":["zarumilla"]});
export const childModules = Object.freeze({"zarumilla":"./zarumilla/zarumilla.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
