// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tucuman","repository":"america","path":"argentina/tucuman","depth":2,"parent":"argentina","children":["aguilares","alderetes","famailla","monteros","san-miguel-de-tucuman","tafi-viejo","yerba-buena"]});
export const childModules = Object.freeze({"aguilares":"./aguilares/aguilares.js","alderetes":"./alderetes/alderetes.js","famailla":"./famailla/famailla.js","monteros":"./monteros/monteros.js","san-miguel-de-tucuman":"./san-miguel-de-tucuman/san-miguel-de-tucuman.js","tafi-viejo":"./tafi-viejo/tafi-viejo.js","yerba-buena":"./yerba-buena/yerba-buena.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
