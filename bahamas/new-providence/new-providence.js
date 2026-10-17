// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"new-providence","repository":"america","path":"bahamas/new-providence","depth":2,"parent":"bahamas","children":["killarney","nassau"]});
export const childModules = Object.freeze({"killarney":"./killarney/killarney.js","nassau":"./nassau/nassau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
