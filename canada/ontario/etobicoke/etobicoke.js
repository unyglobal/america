// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"etobicoke","repository":"america","path":"canada/ontario/etobicoke","depth":3,"parent":"canada/ontario","children":["bloordale-gardens","etobicoke-west-mall"]});
export const childModules = Object.freeze({"bloordale-gardens":"./bloordale-gardens/bloordale-gardens.js","etobicoke-west-mall":"./etobicoke-west-mall/etobicoke-west-mall.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
