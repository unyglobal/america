// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ashmont","repository":"america","path":"united-states/massachusetts/ashmont","depth":3,"parent":"united-states/massachusetts","children":["dorchester-south"]});
export const childModules = Object.freeze({"dorchester-south":"./dorchester-south/dorchester-south.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
