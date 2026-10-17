// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"costa-rica","repository":"america","path":"costa-rica","depth":1,"parent":"","children":["alajuela-province","cartago-province","guanacaste-province","heredia-province","limon-province","puntarenas-province","san-jose","san-jose-a"]});
export const childModules = Object.freeze({"alajuela-province":"./alajuela-province/alajuela-province.js","cartago-province":"./cartago-province/cartago-province.js","guanacaste-province":"./guanacaste-province/guanacaste-province.js","heredia-province":"./heredia-province/heredia-province.js","limon-province":"./limon-province/limon-province.js","puntarenas-province":"./puntarenas-province/puntarenas-province.js","san-jose":"./san-jose/san-jose.js","san-jose-a":"./san-jose-a/san-jose-a.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
