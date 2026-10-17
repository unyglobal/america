// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tucurui","repository":"america","path":"brazil/para/tucurui","depth":3,"parent":"brazil/para","children":["colorado","lagoa-santa-isabel","passarinho"]});
export const childModules = Object.freeze({"colorado":"./colorado/colorado.js","lagoa-santa-isabel":"./lagoa-santa-isabel/lagoa-santa-isabel.js","passarinho":"./passarinho/passarinho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
