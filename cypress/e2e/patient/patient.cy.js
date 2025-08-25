describe('FHIR Patient CRUD Operations', () => {
  it('Create Patient (POST)', () => {
    cy.request({
      method: 'POST',
      url: '/Patient',
      body: {
        resourceType: "Patient",
        name: [{ use: "official", family: "Kumar", given: ["Saran"] }],
        gender: "male",
        birthDate: "1985-01-01"
      },
      headers: { 'Content-Type': 'application/fhir+json' }
    }).then((response) => {
      expect(response.status).to.eq(201);
      
      // Capture Patient ID from response
      const patientId = response.body.id;
      expect(patientId).to.exist;

      // Store in Cypress environment
      Cypress.env('patientId', patientId);
      cy.log("Created Patient ID: " + patientId);
    });
  });

  it('Get Patient (GET)', () => {
    const patientId = Cypress.env('patientId');
    cy.log("Using Patient ID: " + patientId);

    cy.request({
      method: 'GET',
      url: `/Patient/${patientId}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.resourceType).to.eq("Patient");
    });
  });

  it('Update Patient (PUT)', () => {
    const patientId = Cypress.env('patientId');
    cy.log("Updating Patient ID: " + patientId);

    cy.request({
      method: 'PUT',
      url: `/Patient/${patientId}`,
      body: {
        resourceType: "Patient",
        id: patientId,
        name: [{ use: "official", family: "Kumar", given: ["Saran Updated"] }],
        gender: "male",
        birthDate: "1985-01-01"
      },
      headers: { 'Content-Type': 'application/fhir+json' },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name[0].given[0]).to.eq("Saran Updated");
    });
  });

  it('Delete Patient (DELETE)', () => {
    const patientId = Cypress.env('patientId');
    cy.log("Deleting Patient ID: " + patientId);

    cy.request({
      method: 'DELETE',
      url: `/Patient/${patientId}`,
      failOnStatusCode: false
    }).then((response) => {
      expect([200, 204]).to.include(response.status);
    });
  });
});
