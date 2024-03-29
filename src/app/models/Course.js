const mongoose = require('mongoose')
var slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema
mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, maxLength: 255, require: true},
    description: {type: String, maxLength: 600 },
    image: {type: String, maxLength: 255},
    videoId: {type: String},
    level: {type: String},
    slug: { type: String, slug: "name", unique: true}
}, {
    timestamps: true,
} )
module.exports = mongoose.model('Course', Course);