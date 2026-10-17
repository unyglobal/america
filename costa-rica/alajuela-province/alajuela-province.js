// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"alajuela-province","repository":"america","path":"costa-rica/alajuela-province","depth":2,"parent":"costa-rica","children":["alajuela","quesada"]});
export const childModules = Object.freeze({"alajuela":"./alajuela/alajuela.js","quesada":"./quesada/quesada.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
