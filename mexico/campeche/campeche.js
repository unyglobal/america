// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"campeche","repository":"america","path":"mexico/campeche","depth":2,"parent":"mexico","children":["champoton","ciudad-del-carmen","escarcega"]});
export const childModules = Object.freeze({"champoton":"./champoton/champoton.js","ciudad-del-carmen":"./ciudad-del-carmen/ciudad-del-carmen.js","escarcega":"./escarcega/escarcega.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
