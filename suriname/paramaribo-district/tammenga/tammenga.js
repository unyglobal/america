// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tammenga","repository":"america","path":"suriname/paramaribo-district/tammenga","depth":3,"parent":"suriname/paramaribo-district","children":["balona-park","volkswoning-projekt-l-hermitage"]});
export const childModules = Object.freeze({"balona-park":"./balona-park/balona-park.js","volkswoning-projekt-l-hermitage":"./volkswoning-projekt-l-hermitage/volkswoning-projekt-l-hermitage.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
