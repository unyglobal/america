// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-dakota","repository":"america","path":"united-states/north-dakota","depth":2,"parent":"united-states","children":["bismarck","fargo","grand-forks","mandan","minot","west-fargo","williston"]});
export const childModules = Object.freeze({"bismarck":"./bismarck/bismarck.js","fargo":"./fargo/fargo.js","grand-forks":"./grand-forks/grand-forks.js","mandan":"./mandan/mandan.js","minot":"./minot/minot.js","west-fargo":"./west-fargo/west-fargo.js","williston":"./williston/williston.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
