// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santo-domingo-tehuantepec","repository":"america","path":"mexico/oaxaca/santo-domingo-tehuantepec","depth":3,"parent":"mexico/oaxaca","children":["industrial","la-soledad","lieza","san-juanico","santa-cruz","santa-maria"]});
export const childModules = Object.freeze({"industrial":"./industrial/industrial.js","la-soledad":"./la-soledad/la-soledad.js","lieza":"./lieza/lieza.js","san-juanico":"./san-juanico/san-juanico.js","santa-cruz":"./santa-cruz/santa-cruz.js","santa-maria":"./santa-maria/santa-maria.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
