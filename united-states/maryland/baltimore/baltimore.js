// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baltimore","repository":"america","path":"united-states/maryland/baltimore","depth":3,"parent":"united-states/maryland","children":["downtown","downtown-west","inner-harbor","jonestown","mount-vernon","old-town","otterbein","penn-fallsway","pleasant-view-gardens"]});
export const childModules = Object.freeze({"downtown":"./downtown/downtown.js","downtown-west":"./downtown-west/downtown-west.js","inner-harbor":"./inner-harbor/inner-harbor.js","jonestown":"./jonestown/jonestown.js","mount-vernon":"./mount-vernon/mount-vernon.js","old-town":"./old-town/old-town.js","otterbein":"./otterbein/otterbein.js","penn-fallsway":"./penn-fallsway/penn-fallsway.js","pleasant-view-gardens":"./pleasant-view-gardens/pleasant-view-gardens.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
