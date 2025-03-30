// .eleventy.js
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    // You can keep or remove this console.log now
    console.log("--- Loading Eleventy Configuration ---");

    // Passthrough copy for assets directory
    eleventyConfig.addPassthroughCopy("assets");

    // REMOVE or comment out the year shortcode definition
    // eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    // Add other configurations here (collections, filters, etc.)

    return {
        // Set directories to watch and process
        dir: {
            input: "pages",
            includes: "../_includes",
            data: "../_data",
            output: "_site",
        },
        // Define template engines
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};
