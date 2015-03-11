module.exports = function (grunt)
{
	grunt.initConfig(
	{
		less:
		{
			"theme":
			{
				options:
				{
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files:
				{
					"css/freelancer.css": "less/freelancer.less"
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	//grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['less']);
};