// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pasto","repository":"america","path":"colombia/narino/pasto","depth":3,"parent":"colombia/narino","children":["barrio-la-aurora","barrio-las-cuadras","barrio-san-ignacio","centro-de-pasto"]});
export const childModules = Object.freeze({"barrio-la-aurora":"./barrio-la-aurora/barrio-la-aurora.js","barrio-las-cuadras":"./barrio-las-cuadras/barrio-las-cuadras.js","barrio-san-ignacio":"./barrio-san-ignacio/barrio-san-ignacio.js","centro-de-pasto":"./centro-de-pasto/centro-de-pasto.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
