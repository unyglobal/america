// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wyoming","repository":"america","path":"united-states/michigan/wyoming","depth":3,"parent":"united-states/michigan","children":["casper","cheyenne","gillette","laramie","rock-springs","sheridan"]});
export const childModules = Object.freeze({"casper":"./casper/casper.js","cheyenne":"./cheyenne/cheyenne.js","gillette":"./gillette/gillette.js","laramie":"./laramie/laramie.js","rock-springs":"./rock-springs/rock-springs.js","sheridan":"./sheridan/sheridan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
