// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"national-city","repository":"america","path":"united-states/california/national-city","depth":3,"parent":"united-states/california","children":["shelltown"]});
export const childModules = Object.freeze({"shelltown":"./shelltown/shelltown.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
