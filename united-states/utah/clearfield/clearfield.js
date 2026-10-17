// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"clearfield","repository":"america","path":"united-states/utah/clearfield","depth":3,"parent":"united-states/utah","children":["al-vita-park","central-park-addition","cherry-hill","clearfield-heights","lakeview","smith-village","yorkshire-place"]});
export const childModules = Object.freeze({"al-vita-park":"./al-vita-park/al-vita-park.js","central-park-addition":"./central-park-addition/central-park-addition.js","cherry-hill":"./cherry-hill/cherry-hill.js","clearfield-heights":"./clearfield-heights/clearfield-heights.js","lakeview":"./lakeview/lakeview.js","smith-village":"./smith-village/smith-village.js","yorkshire-place":"./yorkshire-place/yorkshire-place.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
