// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-lake-tahoe","repository":"america","path":"united-states/california/south-lake-tahoe","depth":3,"parent":"united-states/california","children":["al-tahoe"]});
export const childModules = Object.freeze({"al-tahoe":"./al-tahoe/al-tahoe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
