// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"west-park","repository":"america","path":"united-states/florida/west-park","depth":3,"parent":"united-states/florida","children":["carver-ranches","miami-gardens","utopia"]});
export const childModules = Object.freeze({"carver-ranches":"./carver-ranches/carver-ranches.js","miami-gardens":"./miami-gardens/miami-gardens.js","utopia":"./utopia/utopia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
