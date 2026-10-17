// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"honolulu","repository":"america","path":"united-states/hawaii/honolulu","depth":3,"parent":"united-states/hawaii","children":["downtown","financial-district","kaka-ako"]});
export const childModules = Object.freeze({"downtown":"./downtown/downtown.js","financial-district":"./financial-district/financial-district.js","kaka-ako":"./kaka-ako/kaka-ako.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
