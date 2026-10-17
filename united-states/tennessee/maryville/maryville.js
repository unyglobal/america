// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maryville","repository":"america","path":"united-states/tennessee/maryville","depth":3,"parent":"united-states/tennessee","children":["hannum-addition","hillsdale"]});
export const childModules = Object.freeze({"hannum-addition":"./hannum-addition/hannum-addition.js","hillsdale":"./hillsdale/hillsdale.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
