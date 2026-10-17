// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-francisco-zapotitlan","repository":"america","path":"guatemala/suchitepeque/san-francisco-zapotitlan","depth":3,"parent":"guatemala/suchitepeque","children":["lotificacion-altos-de-san-francisco","lotificacion-del-rio-premier","sector-rio-negro"]});
export const childModules = Object.freeze({"lotificacion-altos-de-san-francisco":"./lotificacion-altos-de-san-francisco/lotificacion-altos-de-san-francisco.js","lotificacion-del-rio-premier":"./lotificacion-del-rio-premier/lotificacion-del-rio-premier.js","sector-rio-negro":"./sector-rio-negro/sector-rio-negro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
