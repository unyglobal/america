// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santa-cruz","repository":"america","path":"argentina/santa-cruz","depth":2,"parent":"argentina","children":["caleta-olivia","el-calafate","las-heras","pico-truncado","puerto-deseado","rio-gallegos"]});
export const childModules = Object.freeze({"caleta-olivia":"./caleta-olivia/caleta-olivia.js","el-calafate":"./el-calafate/el-calafate.js","las-heras":"./las-heras/las-heras.js","pico-truncado":"./pico-truncado/pico-truncado.js","puerto-deseado":"./puerto-deseado/puerto-deseado.js","rio-gallegos":"./rio-gallegos/rio-gallegos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
