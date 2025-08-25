describe('FHIR Condition API Tests', () => {
  let conditionId;

  it('Create Condition (POST)', () => {
    cy.request({
      method: 'POST',
      url: '/Condition',
      body: {
        resourceType: "Condition",
        clinicalStatus: { coding: [{ system: "http://terminology.hl7.org/CodeSystem/condition-clinical", code: "active" }] },
        code: { text: "Hypertension" },
        subject: { reference: "Patient/example" }
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      conditionId = response.body.id;
      expect(conditionId).to.exist;
    });
  });

  it('Get Condition (GET)', () => {
    cy.request(`/Condition/${conditionId}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.resourceType).to.eq('Condition');
    });
  });

  it('Update Condition (PUT)', () => {
    cy.request({
      method: 'PUT',
      url: `/Condition/${conditionId}`,
      body: {
        resourceType: "Condition",
        id: conditionId,
        clinicalStatus: { coding: [{ system: "http://terminology.hl7.org/CodeSystem/condition-clinical", code: "resolved" }] },
        code: { text: "Hypertension" },
        subject: { reference: "Patient/example" }
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Delete Condition (DELETE)', () => {
    cy.request('DELETE', `/Condition/${conditionId}`).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
