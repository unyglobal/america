// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-rioja","repository":"america","path":"argentina/la-rioja","depth":2,"parent":"argentina","children":["aimogasta","chilecito"]});
export const childModules = Object.freeze({"aimogasta":"./aimogasta/aimogasta.js","chilecito":"./chilecito/chilecito.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
