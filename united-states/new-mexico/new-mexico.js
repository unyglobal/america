// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"new-mexico","repository":"america","path":"united-states/new-mexico","depth":2,"parent":"united-states","children":["alamogordo","albuquerque","enchanted-hills","gallup","hobbs","las-cruces","los-lunas","rio-rancho","santa-fe","south-valley","sunland-park"]});
export const childModules = Object.freeze({"alamogordo":"./alamogordo/alamogordo.js","albuquerque":"./albuquerque/albuquerque.js","enchanted-hills":"./enchanted-hills/enchanted-hills.js","gallup":"./gallup/gallup.js","hobbs":"./hobbs/hobbs.js","las-cruces":"./las-cruces/las-cruces.js","los-lunas":"./los-lunas/los-lunas.js","rio-rancho":"./rio-rancho/rio-rancho.js","santa-fe":"./santa-fe/santa-fe.js","south-valley":"./south-valley/south-valley.js","sunland-park":"./sunland-park/sunland-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
