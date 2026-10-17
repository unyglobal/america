// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nova-scotia","repository":"america","path":"canada/nova-scotia","depth":2,"parent":"canada","children":["armdale","bedford","clayton-park-west","cole-harbour","dartmouth","downtown-halifax","glace-bay","halifax","halifax-south-end","halifax-west-end","lower-sackville","new-glasgow","sydney","woodlawn"]});
export const childModules = Object.freeze({"armdale":"./armdale/armdale.js","bedford":"./bedford/bedford.js","clayton-park-west":"./clayton-park-west/clayton-park-west.js","cole-harbour":"./cole-harbour/cole-harbour.js","dartmouth":"./dartmouth/dartmouth.js","downtown-halifax":"./downtown-halifax/downtown-halifax.js","glace-bay":"./glace-bay/glace-bay.js","halifax":"./halifax/halifax.js","halifax-south-end":"./halifax-south-end/halifax-south-end.js","halifax-west-end":"./halifax-west-end/halifax-west-end.js","lower-sackville":"./lower-sackville/lower-sackville.js","new-glasgow":"./new-glasgow/new-glasgow.js","sydney":"./sydney/sydney.js","woodlawn":"./woodlawn/woodlawn.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
