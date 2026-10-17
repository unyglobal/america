// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"annapolis","repository":"america","path":"united-states/maryland/annapolis","depth":3,"parent":"united-states/maryland","children":["bay-view-heights","bloomsbury-square","market-quay"]});
export const childModules = Object.freeze({"bay-view-heights":"./bay-view-heights/bay-view-heights.js","bloomsbury-square":"./bloomsbury-square/bloomsbury-square.js","market-quay":"./market-quay/market-quay.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
