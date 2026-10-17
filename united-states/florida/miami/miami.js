// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"miami","repository":"america","path":"united-states/florida/miami","depth":3,"parent":"united-states/florida","children":["downtown-miami"]});
export const childModules = Object.freeze({"downtown-miami":"./downtown-miami/downtown-miami.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
