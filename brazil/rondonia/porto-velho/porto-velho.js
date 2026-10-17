// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"porto-velho","repository":"america","path":"brazil/rondonia/porto-velho","depth":3,"parent":"brazil/rondonia","children":["cairi","centro","mocambo","santa-barbara"]});
export const childModules = Object.freeze({"cairi":"./cairi/cairi.js","centro":"./centro/centro.js","mocambo":"./mocambo/mocambo.js","santa-barbara":"./santa-barbara/santa-barbara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
