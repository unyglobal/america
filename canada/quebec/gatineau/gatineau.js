// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gatineau","repository":"america","path":"canada/quebec/gatineau","depth":3,"parent":"canada/quebec","children":["templeton-ouest"]});
export const childModules = Object.freeze({"templeton-ouest":"./templeton-ouest/templeton-ouest.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
