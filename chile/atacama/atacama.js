// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"atacama","repository":"america","path":"chile/atacama","depth":2,"parent":"chile","children":["caldera","copiapo","vallenar"]});
export const childModules = Object.freeze({"caldera":"./caldera/caldera.js","copiapo":"./copiapo/copiapo.js","vallenar":"./vallenar/vallenar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
