// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"monsenor-nouel","repository":"america","path":"dominican-republic/monsenor-nouel","depth":2,"parent":"dominican-republic","children":["bonao"]});
export const childModules = Object.freeze({"bonao":"./bonao/bonao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
