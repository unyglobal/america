// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nashville","repository":"america","path":"united-states/tennessee/nashville","depth":3,"parent":"united-states/tennessee","children":["downtown-nashville","north-capitol"]});
export const childModules = Object.freeze({"downtown-nashville":"./downtown-nashville/downtown-nashville.js","north-capitol":"./north-capitol/north-capitol.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
