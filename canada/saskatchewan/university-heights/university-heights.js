// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"university-heights","repository":"america","path":"canada/saskatchewan/university-heights","depth":3,"parent":"canada/saskatchewan","children":["erindale","forest-grove","university-heights-urban-centre"]});
export const childModules = Object.freeze({"erindale":"./erindale/erindale.js","forest-grove":"./forest-grove/forest-grove.js","university-heights-urban-centre":"./university-heights-urban-centre/university-heights-urban-centre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
