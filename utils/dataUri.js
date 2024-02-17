import DataUriParser from "datauri/parser.js";
import path from "path";
const getDataUri = (file) => {
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer);
};

export default getDataUri;


//converts file data into a Data URI format, which can be useful for certain scenarios like embedding images directly in HTML or storing them in databases.