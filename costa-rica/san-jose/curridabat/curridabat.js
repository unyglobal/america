// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"curridabat","repository":"america","path":"costa-rica/san-jose/curridabat","depth":3,"parent":"costa-rica/san-jose","children":["santa-cecilia"]});
export const childModules = Object.freeze({"santa-cecilia":"./santa-cecilia/santa-cecilia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
