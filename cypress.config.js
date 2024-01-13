import { defineConfig } from "cypress";

const customConfig = {
  e2e: {
    setupNodeEvents() {},
  },

  env: {
    EMAIL: "polarbear@noroff.no",
    PASSWORD: "password12345",
    FAILEDEMAIL: "user@gmail.com",
    FAILEDPASSWORD: "password",
  },
};

export default defineConfig(customConfig);
