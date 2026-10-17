// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guanabacoa","repository":"america","path":"cuba/havana/guanabacoa","depth":3,"parent":"cuba/havana","children":["d-beche","las-lomas"]});
export const childModules = Object.freeze({"d-beche":"./d-beche/d-beche.js","las-lomas":"./las-lomas/las-lomas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
