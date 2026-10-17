// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"las-vegas","repository":"america","path":"united-states/nevada/las-vegas","depth":3,"parent":"united-states/nevada","children":["las-vegas-downtown"]});
export const childModules = Object.freeze({"las-vegas-downtown":"./las-vegas-downtown/las-vegas-downtown.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
