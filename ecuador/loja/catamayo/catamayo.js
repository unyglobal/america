// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"catamayo","repository":"america","path":"ecuador/loja/catamayo","depth":3,"parent":"ecuador/loja","children":["el-carmen","la-alborada","la-florida","las-canoas","san-antonio","san-vicente"]});
export const childModules = Object.freeze({"el-carmen":"./el-carmen/el-carmen.js","la-alborada":"./la-alborada/la-alborada.js","la-florida":"./la-florida/la-florida.js","las-canoas":"./las-canoas/las-canoas.js","san-antonio":"./san-antonio/san-antonio.js","san-vicente":"./san-vicente/san-vicente.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
