// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tlaquepaque","repository":"america","path":"mexico/jalisco/tlaquepaque","depth":3,"parent":"mexico/jalisco","children":["jardines-de-la-paz","la-asuncion","linda-vista","los-altos","los-meseros","parques-de-tlaquepaque"]});
export const childModules = Object.freeze({"jardines-de-la-paz":"./jardines-de-la-paz/jardines-de-la-paz.js","la-asuncion":"./la-asuncion/la-asuncion.js","linda-vista":"./linda-vista/linda-vista.js","los-altos":"./los-altos/los-altos.js","los-meseros":"./los-meseros/los-meseros.js","parques-de-tlaquepaque":"./parques-de-tlaquepaque/parques-de-tlaquepaque.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
