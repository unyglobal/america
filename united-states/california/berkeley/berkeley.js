// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"berkeley","repository":"america","path":"united-states/california/berkeley","depth":3,"parent":"united-states/california","children":["central-berkeley","normandy-village","north-berkeley"]});
export const childModules = Object.freeze({"central-berkeley":"./central-berkeley/central-berkeley.js","normandy-village":"./normandy-village/normandy-village.js","north-berkeley":"./north-berkeley/north-berkeley.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
