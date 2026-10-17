// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"johnson-city","repository":"america","path":"united-states/tennessee/johnson-city","depth":3,"parent":"united-states/tennessee","children":["east-park","n-c-love-addition","southwest-addition"]});
export const childModules = Object.freeze({"east-park":"./east-park/east-park.js","n-c-love-addition":"./n-c-love-addition/n-c-love-addition.js","southwest-addition":"./southwest-addition/southwest-addition.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
