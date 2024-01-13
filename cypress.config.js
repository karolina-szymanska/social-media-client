import { defineConfig } from "cypress";

const customConfig = {
  e2e: {
    setupNodeEvents() {},
  },

  env: {
    EMAIL: "karolinaszymaska@noroff.no",
    PASSWORD: "password1234",
    FAILEDEMAIL: "user@gmail.com",
    FAILEDPASSWORD: "password",
  },
};

export default defineConfig(customConfig);
