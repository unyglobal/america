// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"patulul","repository":"america","path":"guatemala/suchitepeque/patulul","depth":3,"parent":"guatemala/suchitepeque","children":["barrio-san-felipe","primero-de-septiembre","san-antonio-buena-vista"]});
export const childModules = Object.freeze({"barrio-san-felipe":"./barrio-san-felipe/barrio-san-felipe.js","primero-de-septiembre":"./primero-de-septiembre/primero-de-septiembre.js","san-antonio-buena-vista":"./san-antonio-buena-vista/san-antonio-buena-vista.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
