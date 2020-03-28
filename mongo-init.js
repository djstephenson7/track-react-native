db.createUser({
  user: 'adminUser',
  pwd: 'adminPassword',
  roles: [
    {
      role: 'readWrite',
      db: 'tracks'
    }
  ]
});
