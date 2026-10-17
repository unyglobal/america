// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"steubenville","repository":"america","path":"united-states/ohio/steubenville","depth":3,"parent":"united-states/ohio","children":["brady-estates","hollywood-addition"]});
export const childModules = Object.freeze({"brady-estates":"./brady-estates/brady-estates.js","hollywood-addition":"./hollywood-addition/hollywood-addition.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
