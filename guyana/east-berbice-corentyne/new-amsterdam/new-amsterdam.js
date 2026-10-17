// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"new-amsterdam","repository":"america","path":"guyana/east-berbice-corentyne/new-amsterdam","depth":3,"parent":"guyana/east-berbice-corentyne","children":["amsterdam","smythfield"]});
export const childModules = Object.freeze({"amsterdam":"./amsterdam/amsterdam.js","smythfield":"./smythfield/smythfield.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
