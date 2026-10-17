// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"far-rockaway","repository":"america","path":"united-states/new-york/far-rockaway","depth":3,"parent":"united-states/new-york","children":["wave-crest"]});
export const childModules = Object.freeze({"wave-crest":"./wave-crest/wave-crest.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
