// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"palo-alto","repository":"america","path":"united-states/california/palo-alto","depth":3,"parent":"united-states/california","children":["embarcadero-oaks","leland-manor","professorville"]});
export const childModules = Object.freeze({"embarcadero-oaks":"./embarcadero-oaks/embarcadero-oaks.js","leland-manor":"./leland-manor/leland-manor.js","professorville":"./professorville/professorville.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
