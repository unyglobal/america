// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"newfoundland-and-labrador","repository":"america","path":"canada/newfoundland-and-labrador","depth":2,"parent":"canada","children":["conception-bay-south","corner-brook","mount-pearl","paradise","st-john-s"]});
export const childModules = Object.freeze({"conception-bay-south":"./conception-bay-south/conception-bay-south.js","corner-brook":"./corner-brook/corner-brook.js","mount-pearl":"./mount-pearl/mount-pearl.js","paradise":"./paradise/paradise.js","st-john-s":"./st-john-s/st-john-s.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
