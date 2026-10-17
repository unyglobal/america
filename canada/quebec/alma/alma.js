// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"alma","repository":"america","path":"canada/quebec/alma","depth":3,"parent":"canada/quebec","children":["le-centre-ville","saint-jude"]});
export const childModules = Object.freeze({"le-centre-ville":"./le-centre-ville/le-centre-ville.js","saint-jude":"./saint-jude/saint-jude.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
