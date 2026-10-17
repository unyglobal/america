// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aguascalientes","repository":"america","path":"mexico/aguascalientes","depth":2,"parent":"mexico","children":["calvillo","jesus-maria","pabellon-de-arteaga","rincon-de-romos","san-francisco-de-los-romo"]});
export const childModules = Object.freeze({"calvillo":"./calvillo/calvillo.js","jesus-maria":"./jesus-maria/jesus-maria.js","pabellon-de-arteaga":"./pabellon-de-arteaga/pabellon-de-arteaga.js","rincon-de-romos":"./rincon-de-romos/rincon-de-romos.js","san-francisco-de-los-romo":"./san-francisco-de-los-romo/san-francisco-de-los-romo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
