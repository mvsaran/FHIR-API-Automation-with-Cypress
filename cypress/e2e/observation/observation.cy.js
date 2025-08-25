describe('FHIR Observation API Tests', () => {
  let observationId;

  it('Create Observation (POST)', () => {
    cy.request({
      method: 'POST',
      url: '/Observation',
      body: {
        resourceType: "Observation",
        status: "final",
        code: { text: "Blood Pressure" },
        valueQuantity: { value: 120, unit: "mmHg" },
        subject: { reference: "Patient/example" }
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      observationId = response.body.id;
      expect(observationId).to.exist;
    });
  });

  it('Get Observation (GET)', () => {
    cy.request(`/Observation/${observationId}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.resourceType).to.eq('Observation');
    });
  });

  it('Update Observation (PUT)', () => {
    cy.request({
      method: 'PUT',
      url: `/Observation/${observationId}`,
      body: {
        resourceType: "Observation",
        id: observationId,
        status: "amended",
        code: { text: "Blood Pressure" },
        valueQuantity: { value: 130, unit: "mmHg" },
        subject: { reference: "Patient/example" }
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Delete Observation (DELETE)', () => {
    cy.request('DELETE', `/Observation/${observationId}`).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
