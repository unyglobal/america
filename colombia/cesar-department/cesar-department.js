// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cesar-department","repository":"america","path":"colombia/cesar-department","depth":2,"parent":"colombia","children":["aguachica","agustin-codazzi","ariguani","astrea","becerril","chimichagua","chiriguana","curumani","el-copey","la-jagua-de-ibirico","pailitas","san-diego","valledupar"]});
export const childModules = Object.freeze({"aguachica":"./aguachica/aguachica.js","agustin-codazzi":"./agustin-codazzi/agustin-codazzi.js","ariguani":"./ariguani/ariguani.js","astrea":"./astrea/astrea.js","becerril":"./becerril/becerril.js","chimichagua":"./chimichagua/chimichagua.js","chiriguana":"./chiriguana/chiriguana.js","curumani":"./curumani/curumani.js","el-copey":"./el-copey/el-copey.js","la-jagua-de-ibirico":"./la-jagua-de-ibirico/la-jagua-de-ibirico.js","pailitas":"./pailitas/pailitas.js","san-diego":"./san-diego/san-diego.js","valledupar":"./valledupar/valledupar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
