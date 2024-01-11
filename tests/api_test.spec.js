const { test, expect } = require('@playwright/test');
 import { faker } from '@faker-js/faker';
 const Ajv = require('ajv');
 const ajv = new Ajv(); 

test('Harbinger Test', async ({ request }) => {
  // POST http://10.10.90.71:1090/role/create/
  const response1 = await request.post(`http://10.10.90.71:1090/role/create/`, {
    headers: {},
     data: {"role":"superadmin"}  });

const recievedStatusCode1=response1.status();
 
       expect(response1.status(),`Expected status code: 200, Recieved status code: ${recievedStatusCode1} `).toBe(200);
});

