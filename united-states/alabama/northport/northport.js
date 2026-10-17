// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"northport","repository":"america","path":"united-states/alabama/northport","depth":3,"parent":"united-states/alabama","children":["bellwood","birdway-drive","roselawn","twin-manor"]});
export const childModules = Object.freeze({"bellwood":"./bellwood/bellwood.js","birdway-drive":"./birdway-drive/birdway-drive.js","roselawn":"./roselawn/roselawn.js","twin-manor":"./twin-manor/twin-manor.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
