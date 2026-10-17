// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kansas","repository":"america","path":"united-states/kansas","depth":2,"parent":"united-states","children":["derby","dodge-city","emporia","great-bend","hays","hutchinson","junction-city","leavenworth","leawood","lenexa","liberal","olathe","overland-park","prairie-village","salina","topeka","wichita"]});
export const childModules = Object.freeze({"derby":"./derby/derby.js","dodge-city":"./dodge-city/dodge-city.js","emporia":"./emporia/emporia.js","great-bend":"./great-bend/great-bend.js","hays":"./hays/hays.js","hutchinson":"./hutchinson/hutchinson.js","junction-city":"./junction-city/junction-city.js","leavenworth":"./leavenworth/leavenworth.js","leawood":"./leawood/leawood.js","lenexa":"./lenexa/lenexa.js","liberal":"./liberal/liberal.js","olathe":"./olathe/olathe.js","overland-park":"./overland-park/overland-park.js","prairie-village":"./prairie-village/prairie-village.js","salina":"./salina/salina.js","topeka":"./topeka/topeka.js","wichita":"./wichita/wichita.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
