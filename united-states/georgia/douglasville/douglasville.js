// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"douglasville","repository":"america","path":"united-states/georgia/douglasville","depth":3,"parent":"united-states/georgia","children":["alta-vista","lincoln-heights","salem"]});
export const childModules = Object.freeze({"alta-vista":"./alta-vista/alta-vista.js","lincoln-heights":"./lincoln-heights/lincoln-heights.js","salem":"./salem/salem.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
