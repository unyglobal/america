// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arandas","repository":"america","path":"mexico/jalisco/arandas","depth":3,"parent":"mexico/jalisco","children":["americas","centro","panteon-viejo","san-pablo","santa-rosa"]});
export const childModules = Object.freeze({"americas":"./americas/americas.js","centro":"./centro/centro.js","panteon-viejo":"./panteon-viejo/panteon-viejo.js","san-pablo":"./san-pablo/san-pablo.js","santa-rosa":"./santa-rosa/santa-rosa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
