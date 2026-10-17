// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"riverton","repository":"america","path":"united-states/utah/riverton","depth":3,"parent":"united-states/utah","children":["carol-villa","d-and-d-ideal-acres","edgewood","freeman-butterfield","glen-aire","greenfield","laurel-chase-acres","meado-green","park-avenue","pueblo-del-montana","river-haven-estates","riverton-majestic-village"]});
export const childModules = Object.freeze({"carol-villa":"./carol-villa/carol-villa.js","d-and-d-ideal-acres":"./d-and-d-ideal-acres/d-and-d-ideal-acres.js","edgewood":"./edgewood/edgewood.js","freeman-butterfield":"./freeman-butterfield/freeman-butterfield.js","glen-aire":"./glen-aire/glen-aire.js","greenfield":"./greenfield/greenfield.js","laurel-chase-acres":"./laurel-chase-acres/laurel-chase-acres.js","meado-green":"./meado-green/meado-green.js","park-avenue":"./park-avenue/park-avenue.js","pueblo-del-montana":"./pueblo-del-montana/pueblo-del-montana.js","river-haven-estates":"./river-haven-estates/river-haven-estates.js","riverton-majestic-village":"./riverton-majestic-village/riverton-majestic-village.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
