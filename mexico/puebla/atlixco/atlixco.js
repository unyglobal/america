// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"atlixco","repository":"america","path":"mexico/puebla/atlixco","depth":3,"parent":"mexico/puebla","children":["ahuehuete","alvaro-obregon","casco-ex-rancho-las-tablas","hogar-del-obrero","la-concordia","molino-del-carmen","prados-sur","ricardo-trevino","solares-grandes"]});
export const childModules = Object.freeze({"ahuehuete":"./ahuehuete/ahuehuete.js","alvaro-obregon":"./alvaro-obregon/alvaro-obregon.js","casco-ex-rancho-las-tablas":"./casco-ex-rancho-las-tablas/casco-ex-rancho-las-tablas.js","hogar-del-obrero":"./hogar-del-obrero/hogar-del-obrero.js","la-concordia":"./la-concordia/la-concordia.js","molino-del-carmen":"./molino-del-carmen/molino-del-carmen.js","prados-sur":"./prados-sur/prados-sur.js","ricardo-trevino":"./ricardo-trevino/ricardo-trevino.js","solares-grandes":"./solares-grandes/solares-grandes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
