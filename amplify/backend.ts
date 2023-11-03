import { Backend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';
import { LocationMapStack } from './locationMapStack/resource.js';


const backend = new Backend({
  auth,
  data,
});


new LocationMapStack(backend.getOrCreateStack('LocationMapStack'), 'myLocationResource', {})