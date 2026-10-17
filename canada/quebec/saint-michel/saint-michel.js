// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saint-michel","repository":"america","path":"canada/quebec/saint-michel","depth":3,"parent":"canada/quebec","children":["sainte-lucie"]});
export const childModules = Object.freeze({"sainte-lucie":"./sainte-lucie/sainte-lucie.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
