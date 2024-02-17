import multer from "multer"

const storage = multer.memoryStorage();

const singleUpload = multer({storage}).single("file");


export default singleUpload

//handle a single file upload with the field name "file."
//Multer is configured with memoryStorage(), indicating that the file data will be stored in memory. 

