// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cartago-province","repository":"america","path":"costa-rica/cartago-province","depth":2,"parent":"costa-rica","children":["cartago","paraiso","san-diego","turrialba"]});
export const childModules = Object.freeze({"cartago":"./cartago/cartago.js","paraiso":"./paraiso/paraiso.js","san-diego":"./san-diego/san-diego.js","turrialba":"./turrialba/turrialba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
