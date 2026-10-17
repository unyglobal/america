// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"blacksburg","repository":"america","path":"united-states/virginia/blacksburg","depth":3,"parent":"united-states/virginia","children":["berryfield","dickerson","keister-addition","miller-addition","mountain-view-estates"]});
export const childModules = Object.freeze({"berryfield":"./berryfield/berryfield.js","dickerson":"./dickerson/dickerson.js","keister-addition":"./keister-addition/keister-addition.js","miller-addition":"./miller-addition/miller-addition.js","mountain-view-estates":"./mountain-view-estates/mountain-view-estates.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
