import generateShortCode from "../services/shortCode.service.js";
import {saveUrl, findUrlByShortCode} from "../services/url.service.js";

export async function createShortUrl(req, res, next){
    try{
        const { originalUrl } = req.body;

        const shortCode = generateShortCode();

        const savedUrl = await saveUrl(shortCode, originalUrl);

        res.status(201).json({
            message: "Short URL created successfully",
            data: savedUrl
        });
    } 
    catch(error){
        next(error);
    }
}
// redirect to the original website
export async function redirectUrl(req, res, next) {
    try{
        const { shortCode } = req.params;

        const url = await findUrlByShortCode(shortCode);

        if(!url){
            return res.status(404).json({
                error: "Short URL not found"
            });
        }
        return res.redirect(302, url.original_url);
    } 
    catch(error){
        next(error);
    }
}