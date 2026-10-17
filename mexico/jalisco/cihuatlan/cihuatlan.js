// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cihuatlan","repository":"america","path":"mexico/jalisco/cihuatlan","depth":3,"parent":"mexico/jalisco","children":["barrio-nuevo","casimiro-castillo","centro","piedra-blanca"]});
export const childModules = Object.freeze({"barrio-nuevo":"./barrio-nuevo/barrio-nuevo.js","casimiro-castillo":"./casimiro-castillo/casimiro-castillo.js","centro":"./centro/centro.js","piedra-blanca":"./piedra-blanca/piedra-blanca.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
