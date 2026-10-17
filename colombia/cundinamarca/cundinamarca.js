// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cundinamarca","repository":"america","path":"colombia/cundinamarca","depth":2,"parent":"colombia","children":["cajica","chia","cota","facatativa","funza","fusagasuga","girardot-city","guaduas","la-mesa","madrid","mosquera","pacho","puerto-salgar","sibate","silvania","soacha","tocancipa","villa-de-san-diego-de-ubate","villeta","zipaquira"]});
export const childModules = Object.freeze({"cajica":"./cajica/cajica.js","chia":"./chia/chia.js","cota":"./cota/cota.js","facatativa":"./facatativa/facatativa.js","funza":"./funza/funza.js","fusagasuga":"./fusagasuga/fusagasuga.js","girardot-city":"./girardot-city/girardot-city.js","guaduas":"./guaduas/guaduas.js","la-mesa":"./la-mesa/la-mesa.js","madrid":"./madrid/madrid.js","mosquera":"./mosquera/mosquera.js","pacho":"./pacho/pacho.js","puerto-salgar":"./puerto-salgar/puerto-salgar.js","sibate":"./sibate/sibate.js","silvania":"./silvania/silvania.js","soacha":"./soacha/soacha.js","tocancipa":"./tocancipa/tocancipa.js","villa-de-san-diego-de-ubate":"./villa-de-san-diego-de-ubate/villa-de-san-diego-de-ubate.js","villeta":"./villeta/villeta.js","zipaquira":"./zipaquira/zipaquira.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
