const userSchema = {
    username: 'VARCHAR(255) NOT NULL UNIQUE',
    password: 'VARCHAR(255)',
  };

module.exports = userSchema;