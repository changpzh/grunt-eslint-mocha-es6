"use strict";

module.exports = grunt => {
    grunt.initConfig({
        eslint: {
            options: {
                configFile: ".eslintrc.json",
                quiet: true
            },
            validate: ["src/**/*.js", "test/**/*.js"]
        },
        mochaTest: {
            options: {
                timeout: 10000,
                slow: 500
            },
            src: ["test/**/*.js"]
        }
    });

    grunt.loadTasks("esRules/tasks");
    grunt.loadNpmTasks("grunt-mocha-test");

    grunt.registerTask("default", ["eslint", "mochaTest"]);
    grunt.registerTask("ci", ["eslint", "mochaTest"]);
    grunt.registerTask("test", ["mochaTest"]);
};