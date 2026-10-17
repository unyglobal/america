// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"peten","repository":"america","path":"guatemala/peten","depth":2,"parent":"guatemala","children":["flores","poptun","san-benito"]});
export const childModules = Object.freeze({"flores":"./flores/flores.js","poptun":"./poptun/poptun.js","san-benito":"./san-benito/san-benito.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
