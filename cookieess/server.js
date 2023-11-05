const app = require("express")();

app.get("/", (req, res) => {
  // -- creating a cookie from server-side ---
  // below will create a cookie header from the server side
  // when user visits "/", then in the response header a set-cookie will be set
  // thus setting a cookie value in the user's broswer
  res.setHeader("set-cookie", ["setfromserver=my-cookie-2"]);
  res.sendFile(`${__dirname}/index.html`);
});

// ---- accessing cookies from request headers sent to a particular path --------
app.get("/path1", (req, res) => {
  /* 
    add the below code in console to add cookies to this path
    document.cookies="topath1=1;path=/path1"
  */
  res.send(`Path 1 has received these cookies ${req.headers.cookie}`);
});

app.get("/path2", (req, res) => {
  /* 
    add the below code in console to add cookies to this path
    document.cookies="topath2=1;path=/path2"
  */
  res.send(`Path 2 has received these cookies ${req.headers.cookie}`);
});

// ---- cookie with max-age --------
app.get("/maxage", (req, res) => {
  // setting a cookie that expires in 5 seconds
  res.cookie("expirein(seconds)", "5", {
    maxAge: 5000,
  });
  // in document.cookies, it works like this
  // document.cookies = "my-cookie=5;max-age=5"; // here 5 implies 5 sec
  res.send(`Maxage received these cookies ${req.headers.cookie}`);
});

app.listen(8000, () => {
  console.log("Listening to Port 8000");
});
