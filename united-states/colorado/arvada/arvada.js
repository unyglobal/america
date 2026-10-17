// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arvada","repository":"america","path":"united-states/colorado/arvada","depth":3,"parent":"united-states/colorado","children":["alta-vista"]});
export const childModules = Object.freeze({"alta-vista":"./alta-vista/alta-vista.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
