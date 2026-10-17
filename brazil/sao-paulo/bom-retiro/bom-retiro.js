// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bom-retiro","repository":"america","path":"brazil/sao-paulo/bom-retiro","depth":3,"parent":"brazil/sao-paulo","children":["santa-efigenia"]});
export const childModules = Object.freeze({"santa-efigenia":"./santa-efigenia/santa-efigenia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
