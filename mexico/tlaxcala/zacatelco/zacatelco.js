// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zacatelco","repository":"america","path":"mexico/tlaxcala/zacatelco","depth":3,"parent":"mexico/tlaxcala","children":["alberto-juarez-blancas","la-venta","las-palomas","libertad","tlatlacola"]});
export const childModules = Object.freeze({"alberto-juarez-blancas":"./alberto-juarez-blancas/alberto-juarez-blancas.js","la-venta":"./la-venta/la-venta.js","las-palomas":"./las-palomas/las-palomas.js","libertad":"./libertad/libertad.js","tlatlacola":"./tlatlacola/tlatlacola.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
