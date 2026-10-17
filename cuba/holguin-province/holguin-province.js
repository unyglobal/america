// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"holguin-province","repository":"america","path":"cuba/holguin-province","depth":2,"parent":"cuba","children":["banes","cacocum","cueto","gibara","holguin","moa","sagua-de-tanamo","san-german"]});
export const childModules = Object.freeze({"banes":"./banes/banes.js","cacocum":"./cacocum/cacocum.js","cueto":"./cueto/cueto.js","gibara":"./gibara/gibara.js","holguin":"./holguin/holguin.js","moa":"./moa/moa.js","sagua-de-tanamo":"./sagua-de-tanamo/sagua-de-tanamo.js","san-german":"./san-german/san-german.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
