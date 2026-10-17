// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-felipe","repository":"america","path":"guatemala/retalhuleu/san-felipe","depth":3,"parent":"guatemala/retalhuleu","children":["lotificacion-pamorral"]});
export const childModules = Object.freeze({"lotificacion-pamorral":"./lotificacion-pamorral/lotificacion-pamorral.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
