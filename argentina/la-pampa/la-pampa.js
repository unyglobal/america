// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-pampa","repository":"america","path":"argentina/la-pampa","depth":2,"parent":"argentina","children":["general-acha","general-pico","toay"]});
export const childModules = Object.freeze({"general-acha":"./general-acha/general-acha.js","general-pico":"./general-pico/general-pico.js","toay":"./toay/toay.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
