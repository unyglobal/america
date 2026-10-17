// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"region-of-magallanes","repository":"america","path":"chile/region-of-magallanes","depth":2,"parent":"chile","children":["puerto-natales","punta-arenas"]});
export const childModules = Object.freeze({"puerto-natales":"./puerto-natales/puerto-natales.js","punta-arenas":"./punta-arenas/punta-arenas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
