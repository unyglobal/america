// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"east-brainerd","repository":"america","path":"united-states/tennessee/east-brainerd","depth":3,"parent":"united-states/tennessee","children":["engleton-heights","irwin-hills","liles-addition"]});
export const childModules = Object.freeze({"engleton-heights":"./engleton-heights/engleton-heights.js","irwin-hills":"./irwin-hills/irwin-hills.js","liles-addition":"./liles-addition/liles-addition.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
