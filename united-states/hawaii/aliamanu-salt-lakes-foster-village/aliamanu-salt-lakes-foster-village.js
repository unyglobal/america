// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aliamanu-salt-lakes-foster-village","repository":"america","path":"united-states/hawaii/aliamanu-salt-lakes-foster-village","depth":3,"parent":"united-states/hawaii","children":["aliamanu-makai"]});
export const childModules = Object.freeze({"aliamanu-makai":"./aliamanu-makai/aliamanu-makai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
