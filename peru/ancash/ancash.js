// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ancash","repository":"america","path":"peru/ancash","depth":2,"parent":"peru","children":["centenario","chimbote","coishco","huaraz","huarmey"]});
export const childModules = Object.freeze({"centenario":"./centenario/centenario.js","chimbote":"./chimbote/chimbote.js","coishco":"./coishco/coishco.js","huaraz":"./huaraz/huaraz.js","huarmey":"./huarmey/huarmey.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
