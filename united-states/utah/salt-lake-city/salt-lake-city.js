// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"salt-lake-city","repository":"america","path":"united-states/utah/salt-lake-city","depth":3,"parent":"united-states/utah","children":["clark-learning-office-center"]});
export const childModules = Object.freeze({"clark-learning-office-center":"./clark-learning-office-center/clark-learning-office-center.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
