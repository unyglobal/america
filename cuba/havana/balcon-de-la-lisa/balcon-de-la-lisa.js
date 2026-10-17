// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"balcon-de-la-lisa","repository":"america","path":"cuba/havana/balcon-de-la-lisa","depth":3,"parent":"cuba/havana","children":["arimao","bello-veintiseis","novoa","san-rafael"]});
export const childModules = Object.freeze({"arimao":"./arimao/arimao.js","bello-veintiseis":"./bello-veintiseis/bello-veintiseis.js","novoa":"./novoa/novoa.js","san-rafael":"./san-rafael/san-rafael.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
