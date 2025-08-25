// Utility to store & retrieve IDs across spec files
let resourceStore = {};

Cypress.Commands.add("setResourceId", (resourceType, id) => {
  resourceStore[resourceType] = id;
});

Cypress.Commands.add("getResourceId", (resourceType) => {
  return resourceStore[resourceType];
});
