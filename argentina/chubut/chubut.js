// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chubut","repository":"america","path":"argentina/chubut","depth":2,"parent":"argentina","children":["comodoro-rivadavia","esquel","puerto-madryn","trelew"]});
export const childModules = Object.freeze({"comodoro-rivadavia":"./comodoro-rivadavia/comodoro-rivadavia.js","esquel":"./esquel/esquel.js","puerto-madryn":"./puerto-madryn/puerto-madryn.js","trelew":"./trelew/trelew.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
