// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sacatepequez","repository":"america","path":"guatemala/sacatepequez","depth":2,"parent":"guatemala","children":["alotenango","antigua-guatemala","ciudad-vieja","jocotenango","san-lucas-sacatepequez","santa-maria-de-jesus","santiago-sacatepequez","sumpango"]});
export const childModules = Object.freeze({"alotenango":"./alotenango/alotenango.js","antigua-guatemala":"./antigua-guatemala/antigua-guatemala.js","ciudad-vieja":"./ciudad-vieja/ciudad-vieja.js","jocotenango":"./jocotenango/jocotenango.js","san-lucas-sacatepequez":"./san-lucas-sacatepequez/san-lucas-sacatepequez.js","santa-maria-de-jesus":"./santa-maria-de-jesus/santa-maria-de-jesus.js","santiago-sacatepequez":"./santiago-sacatepequez/santiago-sacatepequez.js","sumpango":"./sumpango/sumpango.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
