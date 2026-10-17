// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"regina","repository":"america","path":"canada/saskatchewan/regina","depth":3,"parent":"canada/saskatchewan","children":["downtown-regina"]});
export const childModules = Object.freeze({"downtown-regina":"./downtown-regina/downtown-regina.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
