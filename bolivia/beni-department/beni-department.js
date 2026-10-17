// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"beni-department","repository":"america","path":"bolivia/beni-department","depth":2,"parent":"bolivia","children":["guayaramerin","riberalta","san-borja","trinidad"]});
export const childModules = Object.freeze({"guayaramerin":"./guayaramerin/guayaramerin.js","riberalta":"./riberalta/riberalta.js","san-borja":"./san-borja/san-borja.js","trinidad":"./trinidad/trinidad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
