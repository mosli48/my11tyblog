//
const { DateTime } = require("luxon");

//
const date_filter_01 = dateObj => 
    DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);

/*
const date_filter_01 = (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED); }
*/
//
module.exports = function (eleventyConfig){
    /*
    eleventyConfig.addPassthroughCopy('./src/assets/css/style.css')
    eleventyConfig.addPassthroughCopy('./src/assets')
    */
    eleventyConfig.addPassthroughCopy('./src/assets')

    //
    eleventyConfig.addFilter("postDate", date_filter_01);

    //
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}
