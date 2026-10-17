// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-augusta","repository":"america","path":"united-states/south-carolina/north-augusta","depth":3,"parent":"united-states/south-carolina","children":["bahama-heights","carolina-terrace","edgefield-heights","fairview-gardens","pine-and-oak-woods"]});
export const childModules = Object.freeze({"bahama-heights":"./bahama-heights/bahama-heights.js","carolina-terrace":"./carolina-terrace/carolina-terrace.js","edgefield-heights":"./edgefield-heights/edgefield-heights.js","fairview-gardens":"./fairview-gardens/fairview-gardens.js","pine-and-oak-woods":"./pine-and-oak-woods/pine-and-oak-woods.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
