const app = require("./app");
const User = require("./UserModel");
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());

const serverUrl =
  "mongodb+srv://mahin1234:mahin1234@cluster0.6jhx2.mongodb.net/my-portfolio?retryWrites=true&w=majority";
mongoose
  .connect(serverUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log("error---", err));
// post

app.get("/", (req, res) => {
  res.send("Hello from Server");
});

app.post("/post", async (req, res) => {
  console.log(`req.body`, req.body);
  var myData = await new User(req.body);

  myData
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      // console.log(`error`, err);
      res.status(400).send("unable to save to database");
    });
});
app.get("/post", async (req, res) => {
  var myData = await User.find({});
  res.send(myData);
});

const port = 5000;
app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening on port ${port}..ok........`);
});
