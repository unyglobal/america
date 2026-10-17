// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jamaica","repository":"america","path":"jamaica","depth":1,"parent":"","children":["clarendon","kingston","manchester","saint-andrew-parish","saint-ann-parish","saint-catherine-parish","saint-james-parish","westmoreland"]});
export const childModules = Object.freeze({"clarendon":"./clarendon/clarendon.js","kingston":"./kingston/kingston.js","manchester":"./manchester/manchester.js","saint-andrew-parish":"./saint-andrew-parish/saint-andrew-parish.js","saint-ann-parish":"./saint-ann-parish/saint-ann-parish.js","saint-catherine-parish":"./saint-catherine-parish/saint-catherine-parish.js","saint-james-parish":"./saint-james-parish/saint-james-parish.js","westmoreland":"./westmoreland/westmoreland.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
