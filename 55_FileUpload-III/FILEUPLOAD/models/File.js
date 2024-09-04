const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

const fileSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    imageUrl:{
        type: String,
    },
    tags:{
        type:String,
    },
    email:{
        type: String,
    }
});

// Always write Post middlewares before mongoose.model
fileSchema.post("save", async function(doc){
    try{
        console.log("Doc:-",doc);

        //transporter :- shift this /config directory for best practice;
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth:{
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        })

        // send mail
        let info = await transporter.sendMail({
            from: `Codehelp`,
            to: doc.email,
            sub: "New File Uploaded on Cloudinary",
            html:`<h2>Hello Jee</h2><p>File Uploaded view here:<a href="${doc.imageUrl}">${doc.imageUrl}</a></p>`
        })
        console.log(info);

    }catch(error){
        console.error(error);
    }
})


const File = mongoose.model("File", fileSchema);
module.exports = File;