// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guanajay","repository":"america","path":"cuba/artemisa/guanajay","depth":3,"parent":"cuba/artemisa","children":["gerabel","la-granja","san-francisco","tacanera"]});
export const childModules = Object.freeze({"gerabel":"./gerabel/gerabel.js","la-granja":"./la-granja/la-granja.js","san-francisco":"./san-francisco/san-francisco.js","tacanera":"./tacanera/tacanera.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
