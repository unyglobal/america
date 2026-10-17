// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"apurimac-department","repository":"america","path":"peru/apurimac-department","depth":2,"parent":"peru","children":["abancay","andahuaylas"]});
export const childModules = Object.freeze({"abancay":"./abancay/abancay.js","andahuaylas":"./andahuaylas/andahuaylas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
