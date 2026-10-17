// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-pablo-de-las-salinas","repository":"america","path":"mexico/mexico/san-pablo-de-las-salinas","depth":3,"parent":"mexico/mexico","children":["san-pablo"]});
export const childModules = Object.freeze({"san-pablo":"./san-pablo/san-pablo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
