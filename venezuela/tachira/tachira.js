// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tachira","repository":"america","path":"venezuela/tachira","depth":2,"parent":"venezuela","children":["capacho-nuevo","colon","coloncito","la-fria","la-grita","michelena","palmira","rubio","san-antonio-del-tachira","san-cristobal","san-josecito","tariba","urena"]});
export const childModules = Object.freeze({"capacho-nuevo":"./capacho-nuevo/capacho-nuevo.js","colon":"./colon/colon.js","coloncito":"./coloncito/coloncito.js","la-fria":"./la-fria/la-fria.js","la-grita":"./la-grita/la-grita.js","michelena":"./michelena/michelena.js","palmira":"./palmira/palmira.js","rubio":"./rubio/rubio.js","san-antonio-del-tachira":"./san-antonio-del-tachira/san-antonio-del-tachira.js","san-cristobal":"./san-cristobal/san-cristobal.js","san-josecito":"./san-josecito/san-josecito.js","tariba":"./tariba/tariba.js","urena":"./urena/urena.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
