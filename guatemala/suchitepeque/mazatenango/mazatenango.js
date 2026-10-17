// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mazatenango","repository":"america","path":"guatemala/suchitepeque/mazatenango","depth":3,"parent":"guatemala/suchitepeque","children":["jardines-del-rosario","lotificacion-calvillo"]});
export const childModules = Object.freeze({"jardines-del-rosario":"./jardines-del-rosario/jardines-del-rosario.js","lotificacion-calvillo":"./lotificacion-calvillo/lotificacion-calvillo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
