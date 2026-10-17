// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"heredia-province","repository":"america","path":"costa-rica/heredia-province","depth":2,"parent":"costa-rica","children":["heredia","mercedes-norte","san-francisco","san-pablo"]});
export const childModules = Object.freeze({"heredia":"./heredia/heredia.js","mercedes-norte":"./mercedes-norte/mercedes-norte.js","san-francisco":"./san-francisco/san-francisco.js","san-pablo":"./san-pablo/san-pablo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
