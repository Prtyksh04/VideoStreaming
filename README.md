# Video Streaming Player (Learning Based Small Project)

## Overview

Video Streaming Player is a web application that enables users to upload, store, and stream videos. The application features video upload, and playback functionalities. It allows users to manage their own videos and provides a streaming experience using HLS (HTTP Live Streaming).

## Features

- **Video Upload**: Users can upload videos which are then processed and stored.
- **Video Streaming**: Videos are streamed in HLS format.

## Prerequisites

- Node.js (v14.x or higher)
- ffmpeg (for video processing)

## Getting Started
<div style="border: 1px solid red; padding: 10px; background-color: #f8d7da; color: #721c24;">
  <strong>Warning:</strong> Make Sure your have ffmped installed on your System. It takes few Minutes.
</div>

[Watch Video on How to Download+install ffmpeg on your System](https://www.youtube.com/watch?v=jZLqNocSQDM)



### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```
### 2. Install Dependencies

```bash
npm install

cd ../frontend
cd videoplayer
npm install
```
### 3. Start the backend Serve
```bash
npm run start
```

### 4. Open the Postman
```bash
http://localhost:3000/upload
```
Set the Request type to POST
Navigate to Body 
set none to from-data 
Set 
Key as file 
and value type to file (Select the file from your System)
Make Sure Not to OverLoad your System with Large Files.

### 5. View the Video
Start the Frontend
```bash
cd frontend
cd videoplayer
npm run dev
```
Enjoy the video you Uploaded.

### Message
THIS PROJECT IS VERY BASIC GIVING YOU IDEA OF HOW STREAMING ,MULTER AND UPLOADS WORK. IT IS A LEARNING PROJECT WHICH I DID MADE TO UNDERSTAND VIDEO STREAMING FOR MY MAJOR PROJECT
