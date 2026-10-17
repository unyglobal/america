// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aserri","repository":"america","path":"costa-rica/san-jose/aserri","depth":3,"parent":"costa-rica/san-jose","children":["salitrillos"]});
export const childModules = Object.freeze({"salitrillos":"./salitrillos/salitrillos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
