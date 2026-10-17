// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"alaska","repository":"america","path":"united-states/alaska","depth":2,"parent":"united-states","children":["anchorage","badger","eagle-river","fairbanks","juneau"]});
export const childModules = Object.freeze({"anchorage":"./anchorage/anchorage.js","badger":"./badger/badger.js","eagle-river":"./eagle-river/eagle-river.js","fairbanks":"./fairbanks/fairbanks.js","juneau":"./juneau/juneau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
