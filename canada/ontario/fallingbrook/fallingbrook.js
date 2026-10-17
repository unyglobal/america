// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fallingbrook","repository":"america","path":"canada/ontario/fallingbrook","depth":3,"parent":"canada/ontario","children":["queenswood-heights"]});
export const childModules = Object.freeze({"queenswood-heights":"./queenswood-heights/queenswood-heights.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
