// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"limon-province","repository":"america","path":"costa-rica/limon-province","depth":2,"parent":"costa-rica","children":["guapiles","limon","siquirres"]});
export const childModules = Object.freeze({"guapiles":"./guapiles/guapiles.js","limon":"./limon/limon.js","siquirres":"./siquirres/siquirres.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
