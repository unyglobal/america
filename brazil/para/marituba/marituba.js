// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"marituba","repository":"america","path":"brazil/para/marituba","depth":3,"parent":"brazil/para","children":["bairro-novo","centro","dom-aristides","nova-uniao"]});
export const childModules = Object.freeze({"bairro-novo":"./bairro-novo/bairro-novo.js","centro":"./centro/centro.js","dom-aristides":"./dom-aristides/dom-aristides.js","nova-uniao":"./nova-uniao/nova-uniao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
