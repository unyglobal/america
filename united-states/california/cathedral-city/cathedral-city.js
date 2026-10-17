// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cathedral-city","repository":"america","path":"united-states/california/cathedral-city","depth":3,"parent":"united-states/california","children":["suntown"]});
export const childModules = Object.freeze({"suntown":"./suntown/suntown.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
