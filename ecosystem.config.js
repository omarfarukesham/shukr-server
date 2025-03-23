module.exports = {
  apps: [
    {
      name: "backend-api",
      script: "dist/server.js", // Your main server file
      instances: "max",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env_file: ".env",
      env: {
        PORT: process.env.PORT,
        DATABASE_URL: process.env.DATABASE_URL,
        BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS,
        JWT_SECRET: process.env.JWT_SECRET,
      },
    },
  ],
};
