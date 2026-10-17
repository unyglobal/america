// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lawson","repository":"america","path":"canada/saskatchewan/lawson","depth":3,"parent":"canada/saskatchewan","children":["lawson-heights-urban-centre","river-heights"]});
export const childModules = Object.freeze({"lawson-heights-urban-centre":"./lawson-heights-urban-centre/lawson-heights-urban-centre.js","river-heights":"./river-heights/river-heights.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
