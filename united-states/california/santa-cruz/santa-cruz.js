// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santa-cruz","repository":"america","path":"united-states/california/santa-cruz","depth":3,"parent":"united-states/california","children":["allegro-heights"]});
export const childModules = Object.freeze({"allegro-heights":"./allegro-heights/allegro-heights.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
