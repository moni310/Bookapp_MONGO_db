const express =require("express");
const app = express();
const db=require("./db");
const Book=require("./src/models/Book")
db()
app.use(express.json({ extended: false }));

app.get("/book", async (req,res) =>{
    res.send("It's working")
    const books= await Book.find();
    res.send({ data:books })
});

app.post("/book", async (req,res) =>{
    console.log(req.body)
    const book =new Book(req.body)
    await book.save()
    const books= await Book.find();
    res.send({ data:books })
});

 
app.delete('/moni', (req, res) => {
  res.send("DELETE Request Called")
})

app.listen(5000,()=>{
    console.log("sever is slow")

})