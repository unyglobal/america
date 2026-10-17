// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"poway","repository":"america","path":"united-states/california/poway","depth":3,"parent":"united-states/california","children":["haleys-trailer-ranch"]});
export const childModules = Object.freeze({"haleys-trailer-ranch":"./haleys-trailer-ranch/haleys-trailer-ranch.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
