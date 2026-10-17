// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gustavo-adolfo-madero","repository":"america","path":"mexico/mexico-city/gustavo-adolfo-madero","depth":3,"parent":"mexico/mexico-city","children":["martin-carrera"]});
export const childModules = Object.freeze({"martin-carrera":"./martin-carrera/martin-carrera.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
