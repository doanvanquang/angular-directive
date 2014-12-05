module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	var devPath = 'src';
	var proPath = 'dist';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				files: [{
					expand: true,
					cwd: devPath,
					src: '**/*.js',
					dest: proPath,
					ext: '.min.js'
				}]
			}
		},
		concat: {
			options: {
				separator: ';',
			},
			basic: {
				src: 'dist/**/*.min.js',
				dest: 'dist/main_<%= pkg.version %>.js'
			}
		},
		jshint: {
			options: {
                jshintrc: '.jshintrc',
                grunt: 'Gruntfile.js'                
            },
            all : [ devPath + '/**/*.js' ]
		},
		watch: {
			scripts: {
				options: {
					spawn: false
				},
				files: [devPath + '/**/*.js', devPath + '/**/*.css'],
				tasks: ['jshint']
			}
		}
	});	

	grunt.registerTask('default', [
		'jshint',
		'uglify',
		'concat'
		
	]);
};