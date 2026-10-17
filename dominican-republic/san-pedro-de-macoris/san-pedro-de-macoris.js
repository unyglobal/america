// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-pedro-de-macoris","repository":"america","path":"dominican-republic/san-pedro-de-macoris","depth":2,"parent":"dominican-republic","children":["guayacanes","quisqueya"]});
export const childModules = Object.freeze({"guayacanes":"./guayacanes/guayacanes.js","quisqueya":"./quisqueya/quisqueya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
