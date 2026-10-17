// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-luis-potosi","repository":"america","path":"mexico/san-luis-potosi","depth":2,"parent":"mexico","children":["ciudad-fernandez","ciudad-valles","ebano","matehuala","rioverde","salinas-de-hidalgo","soledad-de-graciano-sanchez","tamazunchale","tamuin"]});
export const childModules = Object.freeze({"ciudad-fernandez":"./ciudad-fernandez/ciudad-fernandez.js","ciudad-valles":"./ciudad-valles/ciudad-valles.js","ebano":"./ebano/ebano.js","matehuala":"./matehuala/matehuala.js","rioverde":"./rioverde/rioverde.js","salinas-de-hidalgo":"./salinas-de-hidalgo/salinas-de-hidalgo.js","soledad-de-graciano-sanchez":"./soledad-de-graciano-sanchez/soledad-de-graciano-sanchez.js","tamazunchale":"./tamazunchale/tamazunchale.js","tamuin":"./tamuin/tamuin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
