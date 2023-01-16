/**
 * Test script
 * @author andrefs94
 */

import Cep from "./Cep.js";

const fruits = ['orange', 'apple', 'banana'];

for (const fruit of fruits) {
    console.log(fruit);
}

try {
    const resp = await new Cep().getCep('89211000');
    console.log(resp.logradouro);
} catch (error) {
    console.error(`Error: ${error.message}`);
}

console.log('Script finished!');
