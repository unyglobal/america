// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"new-springville","repository":"america","path":"united-states/new-york/new-springville","depth":3,"parent":"united-states/new-york","children":["heartland-village"]});
export const childModules = Object.freeze({"heartland-village":"./heartland-village/heartland-village.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
