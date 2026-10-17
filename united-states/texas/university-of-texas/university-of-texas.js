// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"university-of-texas","repository":"america","path":"united-states/texas/university-of-texas","depth":3,"parent":"united-states/texas","children":["west-university"]});
export const childModules = Object.freeze({"west-university":"./west-university/west-university.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
