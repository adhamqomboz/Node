const moongoose = require("mongoose")
const Schema = moongoose.Schema

const articleSchem = new Schema({
    title : String,
    body:String,
    NumberOfLikes:Number
})


const Article = moongoose.model("Article",articleSchem)

module.exports = Article