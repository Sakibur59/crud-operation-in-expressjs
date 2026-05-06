const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://CrudOperationDB:eqIeA0sLT8SFZErk@cluster0.xkpgg4t.mongodb.net/?appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/", (req, res) => {
  res.send("Simple CRUD server is running");
});

const run = async () => {
  try {
    
    await client.connect();
    

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    
    // await client.close();
  }
};
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Simple CRUD server is running on port ${port}`);
});
