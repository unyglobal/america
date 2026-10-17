// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"riverdale","repository":"america","path":"united-states/georgia/riverdale","depth":3,"parent":"united-states/georgia","children":["cedar-hill-estates","sherwood-park"]});
export const childModules = Object.freeze({"cedar-hill-estates":"./cedar-hill-estates/cedar-hill-estates.js","sherwood-park":"./sherwood-park/sherwood-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
