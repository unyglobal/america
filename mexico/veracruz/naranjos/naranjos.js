// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"naranjos","repository":"america","path":"mexico/veracruz/naranjos","depth":3,"parent":"mexico/veracruz","children":["las-delicias","tamaulipas"]});
export const childModules = Object.freeze({"las-delicias":"./las-delicias/las-delicias.js","tamaulipas":"./tamaulipas/tamaulipas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
