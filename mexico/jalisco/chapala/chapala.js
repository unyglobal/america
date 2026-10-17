// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chapala","repository":"america","path":"mexico/jalisco/chapala","depth":3,"parent":"mexico/jalisco","children":["centro","la-cristiana","la-purisima","las-redes","san-miguel","tepehua"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","la-cristiana":"./la-cristiana/la-cristiana.js","la-purisima":"./la-purisima/la-purisima.js","las-redes":"./las-redes/las-redes.js","san-miguel":"./san-miguel/san-miguel.js","tepehua":"./tepehua/tepehua.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
