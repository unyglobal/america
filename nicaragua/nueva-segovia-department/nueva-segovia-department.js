// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nueva-segovia-department","repository":"america","path":"nicaragua/nueva-segovia-department","depth":2,"parent":"nicaragua","children":["jalapa","ocotal"]});
export const childModules = Object.freeze({"jalapa":"./jalapa/jalapa.js","ocotal":"./ocotal/ocotal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
