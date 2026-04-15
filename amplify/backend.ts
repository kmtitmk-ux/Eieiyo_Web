// amplify/backend.ts
import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.ts';

const backend = defineBackend({
  auth
});

export { backend };
