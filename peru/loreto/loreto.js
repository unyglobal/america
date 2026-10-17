// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"loreto","repository":"america","path":"peru/loreto","depth":2,"parent":"peru","children":["belen","contamana","iquitos","requena","san-juan","yurimaguas"]});
export const childModules = Object.freeze({"belen":"./belen/belen.js","contamana":"./contamana/contamana.js","iquitos":"./iquitos/iquitos.js","requena":"./requena/requena.js","san-juan":"./san-juan/san-juan.js","yurimaguas":"./yurimaguas/yurimaguas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
