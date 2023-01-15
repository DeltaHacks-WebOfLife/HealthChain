const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const multer = require('multer')

const fs = require("fs")
const Moralis = require("moralis").default;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'files/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
})

const upload = multer({ storage: storage })
app.use(cors())

Moralis.start({
    apiKey: "7XRDioXwk4U8n5KCyWIIckzYSycgLfMXh4NKbgpNqwEhjAHcH9xXqgNcJpl1sqz2"
});

// ----------------------------------

const links = [];
counter = 0;

app.post('/upload', upload.single('file'), async function (req, res) {
    res.json({})

    console.log("File received " + counter);
    counter++;

    // Generate IPFS link
    links.unshift(await upload_moralis(req.file.path));

    console.log(`A file has been uploaded at ${links[0]}`);
})

app.get("/post", function(req, res) {
    console.log(links[0]);
    res.json({ 
        CLICK_HERE_TO_VIEW_THE_LINK: links[0]
    });
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})

const upload_moralis = async (file) => {
    const abi = [{
        path: file,
        content: fs.readFileSync(file, { encoding: "base64" })
    }]
    
    const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });
    
    return response?.result[0].path;
}
