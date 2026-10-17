// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pierrefonds","repository":"america","path":"canada/quebec/pierrefonds","depth":3,"parent":"canada/quebec","children":["pierrefonds-ouest"]});
export const childModules = Object.freeze({"pierrefonds-ouest":"./pierrefonds-ouest/pierrefonds-ouest.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
