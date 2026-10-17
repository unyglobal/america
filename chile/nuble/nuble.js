// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nuble","repository":"america","path":"chile/nuble","depth":2,"parent":"chile","children":["chillan","chillan-viejo","coelemu","coihueco","quillon","san-carlos"]});
export const childModules = Object.freeze({"chillan":"./chillan/chillan.js","chillan-viejo":"./chillan-viejo/chillan-viejo.js","coelemu":"./coelemu/coelemu.js","coihueco":"./coihueco/coihueco.js","quillon":"./quillon/quillon.js","san-carlos":"./san-carlos/san-carlos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
