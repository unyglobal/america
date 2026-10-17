// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hendersonville","repository":"america","path":"united-states/tennessee/hendersonville","depth":3,"parent":"united-states/tennessee","children":["nokes-heights","oakvale"]});
export const childModules = Object.freeze({"nokes-heights":"./nokes-heights/nokes-heights.js","oakvale":"./oakvale/oakvale.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
