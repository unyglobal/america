// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fredericton","repository":"america","path":"canada/new-brunswick/fredericton","depth":3,"parent":"canada/new-brunswick","children":["uptown-fredericton"]});
export const childModules = Object.freeze({"uptown-fredericton":"./uptown-fredericton/uptown-fredericton.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
