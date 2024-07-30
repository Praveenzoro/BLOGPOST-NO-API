import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let data = []
app.get('/', (req, res)=>{
    res.render('home.ejs');

})

app.get('/create',(req, res)=>{

    res.render('create.ejs');
})

app.post('/post',(req, res)=>{
    const index = req.body.index;
    const newPost = {
        title: req.body.Title,
        content: req.body.content
    };
    console.log(req.body.index)
    if (index !== undefined && index !== '') {
        // Update existing post
        data[index] = newPost;
    } else {
        // Add new post
        data.push(newPost);
    }
    
    res.render("home.ejs", { posts: data });
});

app.post('/delete', (req, res) => {
    const index = req.body.index;
    if (index !== undefined && index !== '') {
        data.splice(index, 1); // Remove the post at the specified index
    }
    res.render('home.ejs', { posts: data });
});





app.post('/delete', (req, res) => {
    
   
});


app.listen(port, ( )=>{
console.log(`Listening on port ${port}`)

})

