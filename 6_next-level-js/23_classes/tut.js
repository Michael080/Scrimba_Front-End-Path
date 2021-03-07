// Note: to run this file w/ node a package.json file with type: module
//       is required
import { data } from './exampleExport.js';

console.log(data);

// edit imported data
let updatedData = data;
updatedData.push('blammo');
console.log('blammo wammo shmammo');
console.log('updated data: ', updatedData);