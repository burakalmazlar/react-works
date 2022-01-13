var db = connect("mongodb://username:password@localhost:27017/admin");

db = db.getSiblingDB("database"); // we can not use "use" statement here to switch db

db.createUser({
  user: "user",
  pwd: "pass",
  roles: [{ role: "readWrite", db: "database" }],
});
