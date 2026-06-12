import express from "express";
import dotenv from "dotenv";
import cors from "cors";


//Activates dotenv - makes .env variables available here
dotenv.config();


const app = express();
app.use(cors({ origin: "http://localhost:9000" }));
app.use(express.json());



const PORT = process.env.PORT;



app.get("/", (req, res) => res.send("Server running!!"));

app.get("/sanity", (req, res) => {
  res.json({
    message: "Sanity fetch check!"
  })
});



app.get("/table", async (req, res) => {

  const tableID = 5680678;
  const token = process.env.TOKEN;

  const response  = await fetch(`https://api.hubapi.com/cms/hubdb/2026-03/tables/${tableID}/rows`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if(!response.ok) {
    throw new Error('Failed to fetch table');
  }

  const data = response.json();
  return data;

})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));