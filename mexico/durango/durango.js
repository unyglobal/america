// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"durango","repository":"america","path":"mexico/durango","depth":2,"parent":"mexico","children":["gomez-palacio","guadalupe-victoria","lerdo","pueblo-nuevo","santiago-papasquiaro","vicente-guerrero","victoria-de-durango"]});
export const childModules = Object.freeze({"gomez-palacio":"./gomez-palacio/gomez-palacio.js","guadalupe-victoria":"./guadalupe-victoria/guadalupe-victoria.js","lerdo":"./lerdo/lerdo.js","pueblo-nuevo":"./pueblo-nuevo/pueblo-nuevo.js","santiago-papasquiaro":"./santiago-papasquiaro/santiago-papasquiaro.js","vicente-guerrero":"./vicente-guerrero/vicente-guerrero.js","victoria-de-durango":"./victoria-de-durango/victoria-de-durango.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
