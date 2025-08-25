describe('FHIR Medication API Tests', () => {
  let medicationId;

  it('Create Medication (POST)', () => {
    cy.request({
      method: 'POST',
      url: '/Medication',
      body: {
        resourceType: "Medication",
        code: { text: "Aspirin 100mg Tablet" },
        status: "active"
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      medicationId = response.body.id;
      expect(medicationId).to.exist;
    });
  });

  it('Get Medication (GET)', () => {
    cy.request(`/Medication/${medicationId}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.resourceType).to.eq('Medication');
    });
  });

  it('Update Medication (PUT)', () => {
    cy.request({
      method: 'PUT',
      url: `/Medication/${medicationId}`,
      body: {
        resourceType: "Medication",
        id: medicationId,
        code: { text: "Aspirin 150mg Tablet" },
        status: "active"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Delete Medication (DELETE)', () => {
    cy.request('DELETE', `/Medication/${medicationId}`).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
