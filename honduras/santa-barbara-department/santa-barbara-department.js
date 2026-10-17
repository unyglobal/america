// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santa-barbara-department","repository":"america","path":"honduras/santa-barbara-department","depth":2,"parent":"honduras","children":["atima","azacualpa","macuelizo","quimistan","san-jose-de-colinas","san-luis","santa-barbara"]});
export const childModules = Object.freeze({"atima":"./atima/atima.js","azacualpa":"./azacualpa/azacualpa.js","macuelizo":"./macuelizo/macuelizo.js","quimistan":"./quimistan/quimistan.js","san-jose-de-colinas":"./san-jose-de-colinas/san-jose-de-colinas.js","san-luis":"./san-luis/san-luis.js","santa-barbara":"./santa-barbara/santa-barbara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
