# Mysql Express Angular Nodejs initial startup

## Description
This makes creating a new MEAN app with a Mysql Relational Database much simpler.

## Contributors
* Tanner Campbell

## Set up
```
mkdir -p ~/projects
```
And change into this directory:
```
cd ~/projects
```
Clone the forked repository:
```
git clone git@github.com:$USERNAME/meanProject.git
```
Make sure to replace $USERNAME with your own GitHub username.

In order to run the code you will need to create a `credentials.js` in the main directory.

The credentials file should look similar to this:

```
module.exports = {
  port: SOME_PORT,
  url: "YOUR_URL",
  host: "DB_HOST_URL",
  user: "DB_USER",
  password: "DB_PASSWORD",
  database: "DB"
};
```

After the credentials file is created you can test it works in the `server.js` file by adding `const connect = require('./connect.js');` to the file and running a simple query to your database similar the following:

```
connect(function(con) {
  var q = "select * from TABLE";
  try {
    con.query(q, function (err, result, fields) {
      if (err) {
        console.log(err);
      }else {
        console.log(result);
      }
    });
  }catch (err) {
    console.log(err);
  }
});
```
Then run the web server.

```
node server.js
```
After successfully logging the results query you can require the `connect.js` in any of your ./routes/_files_ and execute queries.

### To get started with Angular(7)
 From the main directory run the following command:
```
ng new client
```
In the newly created client directory open the `angular.json` file and change
```
"outputPath": "dist/client",
```
To
```
"outputPath": "../views",
```

RUN the Following command:
```
ng build
```
Refresh the browser and it should be working!
