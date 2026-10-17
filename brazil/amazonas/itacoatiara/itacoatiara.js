// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"itacoatiara","repository":"america","path":"brazil/amazonas/itacoatiara","depth":3,"parent":"brazil/amazonas","children":["jauary"]});
export const childModules = Object.freeze({"jauary":"./jauary/jauary.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
