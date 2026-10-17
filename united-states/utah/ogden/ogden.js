// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ogden","repository":"america","path":"united-states/utah/ogden","depth":3,"parent":"united-states/utah","children":["cueston-plaza-condominium","froerer-plaza","h-d-wise","reeves-addition"]});
export const childModules = Object.freeze({"cueston-plaza-condominium":"./cueston-plaza-condominium/cueston-plaza-condominium.js","froerer-plaza":"./froerer-plaza/froerer-plaza.js","h-d-wise":"./h-d-wise/h-d-wise.js","reeves-addition":"./reeves-addition/reeves-addition.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
