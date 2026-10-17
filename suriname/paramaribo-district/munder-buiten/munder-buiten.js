// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"munder-buiten","repository":"america","path":"suriname/paramaribo-district/munder-buiten","depth":3,"parent":"suriname/paramaribo-district","children":["bernie-s-park","stolk-buiten"]});
export const childModules = Object.freeze({"bernie-s-park":"./bernie-s-park/bernie-s-park.js","stolk-buiten":"./stolk-buiten/stolk-buiten.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
