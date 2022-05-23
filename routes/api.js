const router=require("express").Router();
const { equal } = require("assert");
const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);


router.get("/api/notes",(req,res)=>{
   readFile("db.json","utf-8").then(data => {
       var notesArray;
        try {
           notesArray=[].concat(JSON.parse(data))
       } catch (error) {
           notesArray=[]
       }
       return notesArray
   }).then(parsedNotes => res.json(parsedNotes))
   
});
router.post("/api/notes",(req,res) =>{
    readFile("db.json","utf-8").then(data => {
        var notesArray;
         try {
            notesArray=[].concat(JSON.parse(data))
        } catch (error) {
            notesArray=[]
        }
        return notesArray
    }).then(parsedNotes => {
        var notesObject = {
            title:req.body.title,
            text:req.body.text

        }
        var updatedNotes=[...parsedNotes,notesObject]
        console.log(updatedNotes)

        fs.writeFile(__dirname + "db.json", JSON.stringify(updatedNotes), function (error, data) {
            if (error) {
              return error
            }
        
            res.json(updatedNotes);
          })
    })
    console.log(req.body)

    router.delete('/notes/:id', (req, res) => {
        deleteNote(notes, req.params.id);
        res.json(notes);
    })
    
})

module.exports=router;

