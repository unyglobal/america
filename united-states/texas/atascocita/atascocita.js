// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"atascocita","repository":"america","path":"united-states/texas/atascocita","depth":3,"parent":"united-states/texas","children":["atascocita-south","oaks-of-atascocita"]});
export const childModules = Object.freeze({"atascocita-south":"./atascocita-south/atascocita-south.js","oaks-of-atascocita":"./oaks-of-atascocita/oaks-of-atascocita.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
