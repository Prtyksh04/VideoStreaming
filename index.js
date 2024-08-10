import express from "express";
import cors from "cors";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import fs from "fs"
import { exec } from "child_process"

const app = express();
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    credentials: true
}));


// multer middleware for telling where to store the file 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads")
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + uuidv4() + path.extname(
            (file.originalname)
        ));
    }
})

// multer configuration
const upload = multer({ storage: storage });


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.use((req, res, next) => {
    res.header("Access-Contorl-Allow-Origin");
    res.header(
        "Allow-Control-Allow-Headers",
        "Origin,X-Requested-with , Content-Type , Accept"
    );
    next();
})

app.get('/', (req, res) => {
    res.json({ message: "hello home page" });
});

app.post("/upload", upload.single('file'), (req, res) => {
    const videoId = uuidv4();
    const videoPath = req.file.path;
    const outputPath = `./uploads/video/${videoId}`
    const hlsPath = `${outputPath}/index.m3u8`
    //UTF-8 encoded playlist file. these are plain text file that can be used to store the the URL path of the streaming audio or video and information abut the media track.

    console.log("hlsPaath", hlsPath);

    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true })
    }

    // ffmpeg command  //no  queue because of POC , not to be used in production
    const ffmpegCommand = `ffmpeg -i ${videoPath} -codec:v libx264 -codec:a aac -hls_time 10 -hls_playlist_type vod -hls_segment_filename "${outputPath}/segment%03d.ts" -start_number 0 ${hlsPath}`;
    exec(ffmpegCommand , (error , stdout , stderr)=>{
        if(error){
            console.log(`exec error : ${error}`)
        }
        console.log(`stdout : ${stdout}`)
        console.log(`stderr : ${stderr}`)
        const videoUrl = `http://localhost:3000/uploads/video/${videoId}/index.m3u8`

        res.json({
            message : "Video converted HLS format",
            videoUrl : videoUrl,
            videoId : videoId

        })
    })

});

app.listen(3000, () => {
    console.log("App is listening on port 3000...");
});
