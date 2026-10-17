// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rhode-island","repository":"america","path":"united-states/rhode-island","depth":2,"parent":"united-states","children":["barrington","central-falls","coventry","cranston","east-providence","narragansett","north-kingstown","north-providence","pawtucket","providence","smithfield","south-kingstown","warwick","west-warwick","westerly","woonsocket"]});
export const childModules = Object.freeze({"barrington":"./barrington/barrington.js","central-falls":"./central-falls/central-falls.js","coventry":"./coventry/coventry.js","cranston":"./cranston/cranston.js","east-providence":"./east-providence/east-providence.js","narragansett":"./narragansett/narragansett.js","north-kingstown":"./north-kingstown/north-kingstown.js","north-providence":"./north-providence/north-providence.js","pawtucket":"./pawtucket/pawtucket.js","providence":"./providence/providence.js","smithfield":"./smithfield/smithfield.js","south-kingstown":"./south-kingstown/south-kingstown.js","warwick":"./warwick/warwick.js","west-warwick":"./west-warwick/west-warwick.js","westerly":"./westerly/westerly.js","woonsocket":"./woonsocket/woonsocket.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
