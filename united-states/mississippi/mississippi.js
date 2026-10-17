// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mississippi","repository":"america","path":"united-states/mississippi","depth":2,"parent":"united-states","children":["biloxi","clarksdale","gautier","gulfport","hattiesburg","hernando","horn-lake","natchez","ocean-springs","olive-branch","pascagoula","pearl","ridgeland","southaven","starkville","tupelo","vicksburg","west-gulfport"]});
export const childModules = Object.freeze({"biloxi":"./biloxi/biloxi.js","clarksdale":"./clarksdale/clarksdale.js","gautier":"./gautier/gautier.js","gulfport":"./gulfport/gulfport.js","hattiesburg":"./hattiesburg/hattiesburg.js","hernando":"./hernando/hernando.js","horn-lake":"./horn-lake/horn-lake.js","natchez":"./natchez/natchez.js","ocean-springs":"./ocean-springs/ocean-springs.js","olive-branch":"./olive-branch/olive-branch.js","pascagoula":"./pascagoula/pascagoula.js","pearl":"./pearl/pearl.js","ridgeland":"./ridgeland/ridgeland.js","southaven":"./southaven/southaven.js","starkville":"./starkville/starkville.js","tupelo":"./tupelo/tupelo.js","vicksburg":"./vicksburg/vicksburg.js","west-gulfport":"./west-gulfport/west-gulfport.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
