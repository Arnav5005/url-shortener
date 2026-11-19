function validateUrl(req, res, next) {
    const {originalUrl} = req.body;

    if (!originalUrl) {
        return res.status(400).json({
            error: "URL is required"
        });
    }

    try{
        const parsedUrl = new URL(originalUrl);
        if(parsedUrl.protocol!=="http:" && parsedUrl.protocol !== "https:"){
            return res.status(400).json({
                error: "Only HTTP and HTTPS URLs are allowed"
            });
        }
        if(!parsedUrl.hostname){
            return res.status(400).json({
                error: "Invalid URL"
            });
        }
        next();
    } 
    catch{
        return res.status(400).json({
            error: "Invalid URL format"
        });
    }
}

export default validateUrl;