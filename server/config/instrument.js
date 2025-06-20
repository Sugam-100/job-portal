// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
 import * as Sentry from "@sentry/node"
Sentry.init({
  dsn: "https://d68353ad6cd2df4b07e1c72286bf9ef4@o4509528997167104.ingest.us.sentry.io/4509529011978245",

  integrations: [Sentry.mongooseIntegration()],
     

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});