🏥# FHIR Cypress Automation

This repository contains Cypress automated test cases for validating FHIR resources such as **Patient, Condition, Medication, and Observation**.  
The automation ensures compliance with FHIR standards and validates API endpoints.

---

## 📌 Project Structure

```
fhir-cypress-automation/
│── cypress/
│   ├── e2e/
│   │   ├── patient.cy.js
│   │   ├── condition.cy.js
│   │   ├── medication.cy.js
│   │   ├── observation.cy.js
│   ├── fixtures/
│   │   ├── patient.json
│   │   ├── condition.json
│   │   ├── medication.json
│   │   ├── observation.json
│── package.json
│── README.md
```

---

## 🚀 Prerequisites

- Node.js (>=16.x recommended)
- Cypress (>=13.x)
- Git

---

## ⚙️ Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/fhir-cypress-automation.git
cd fhir-cypress-automation
npm install
```

---

## ▶️ Running Tests

Run all Cypress tests:

```bash
npx cypress open
```

or run headlessly:

```bash
npx cypress run
```

---

## 📂 FHIR Resources Automated

1. **Patient**  
   - Validate patient creation API response  
   - Verify required fields (id, name, gender, birthDate, etc.)  
   - Ensure valid FHIR JSON schema  

2. **Condition**  
   - Validate condition creation API response  
   - Ensure reference to patient is valid  
   - Verify required coding system fields  

3. **Medication**  
   - Validate medication creation API response  
   - Ensure medication code system and display values are correct  

4. **Observation**  
   - Validate observation response  
   - Ensure correct `valueQuantity`, `unit`, and coding system  
   - Verify reference to patient  

---

## 🧪 Example Test (Patient)

```javascript
describe('FHIR Patient API', () => {
  it('should validate patient response structure', () => {
    cy.request('/fhir/Patient/123').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.resourceType).to.eq('Patient');
      expect(response.body).to.have.property('id');
      expect(response.body.name[0]).to.have.property('family');
    });
  });
});
```

---

## 📊 Reports

You can integrate **cypress-mochawesome-reporter** for HTML reports:

```bash
npm install cypress-mochawesome-reporter --save-dev
```

Add to `cypress.config.js`:

```javascript
reporter: 'cypress-mochawesome-reporter',
reporterOptions: {
  reportDir: 'cypress/reports',
  overwrite: false,
  html: true,
  json: true,
}
```

---

## ✅ Best Practices

- Store test data in `fixtures/` folder  
- Keep resource validation modular  
- Use schema validation where possible  

---

## 📌 Future Enhancements

- Add **Practitioner** and **Encounter** resource validations  
- Integrate CI/CD pipeline with GitHub Actions  
- Expand coverage to multiple FHIR versions  

---

## 👨‍💻 Author

**Saran Kumar**  
Senior SDET 
