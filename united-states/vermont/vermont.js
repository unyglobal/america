// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vermont","repository":"america","path":"united-states/vermont","depth":2,"parent":"united-states","children":["colchester","rutland","south-burlington"]});
export const childModules = Object.freeze({"colchester":"./colchester/colchester.js","rutland":"./rutland/rutland.js","south-burlington":"./south-burlington/south-burlington.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
