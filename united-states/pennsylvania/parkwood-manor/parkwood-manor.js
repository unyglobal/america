// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"parkwood-manor","repository":"america","path":"united-states/pennsylvania/parkwood-manor","depth":3,"parent":"united-states/pennsylvania","children":["byberry","longmead-farms"]});
export const childModules = Object.freeze({"byberry":"./byberry/byberry.js","longmead-farms":"./longmead-farms/longmead-farms.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
