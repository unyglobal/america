// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"turrialba","repository":"america","path":"costa-rica/cartago-province/turrialba","depth":3,"parent":"costa-rica/cartago-province","children":["margot"]});
export const childModules = Object.freeze({"margot":"./margot/margot.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
