// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cabot","repository":"america","path":"united-states/arkansas/cabot","depth":3,"parent":"united-states/arkansas","children":["bel-aire-subdivision","meadowlark-addition"]});
export const childModules = Object.freeze({"bel-aire-subdivision":"./bel-aire-subdivision/bel-aire-subdivision.js","meadowlark-addition":"./meadowlark-addition/meadowlark-addition.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
