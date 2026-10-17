// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"palau","repository":"america","path":"mexico/coahuila/palau","depth":3,"parent":"mexico/coahuila","children":["agrario","la-cajita","la-cobacha","licenciado-nicolas-torres","nuevo-veintidos","obrera-doscientos-noventa-y-seis","tiro-tres","tiro-uno-y-medio","trakes","zona-centro"]});
export const childModules = Object.freeze({"agrario":"./agrario/agrario.js","la-cajita":"./la-cajita/la-cajita.js","la-cobacha":"./la-cobacha/la-cobacha.js","licenciado-nicolas-torres":"./licenciado-nicolas-torres/licenciado-nicolas-torres.js","nuevo-veintidos":"./nuevo-veintidos/nuevo-veintidos.js","obrera-doscientos-noventa-y-seis":"./obrera-doscientos-noventa-y-seis/obrera-doscientos-noventa-y-seis.js","tiro-tres":"./tiro-tres/tiro-tres.js","tiro-uno-y-medio":"./tiro-uno-y-medio/tiro-uno-y-medio.js","trakes":"./trakes/trakes.js","zona-centro":"./zona-centro/zona-centro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
