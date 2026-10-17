// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ocotlan","repository":"america","path":"mexico/jalisco/ocotlan","depth":3,"parent":"mexico/jalisco","children":["centro","duque","mascota","nuevo-progreso","villas-de-zula"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","duque":"./duque/duque.js","mascota":"./mascota/mascota.js","nuevo-progreso":"./nuevo-progreso/nuevo-progreso.js","villas-de-zula":"./villas-de-zula/villas-de-zula.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
