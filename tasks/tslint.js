var gulp = require('gulp');
var tslint = require('gulp-tslint');

gulp.task('tslint', function () {
	gulp.src(['app/**/*.ts'])
		.pipe(tslint({
			configuration: {
				rules: {
					'class-name': true,
					'comment-format': [true, 'check-space'],
					'curly': true,
					'eofline': true,
					'forin': true,
					'indent': [true, 'spaces'],
					'label-position': true,
					'label-undefined': true,
					'max-line-length': [true, 140],
					'member-access': false,
					'member-ordering': [true,
						'public-before-private',
						'static-before-instance',
						'variables-before-functions'
					],
					'no-arg': true,
					'no-bitwise': true,
					'no-console': [true,
						'debug',
						'info',
						'time',
						'timeEnd',
						'trace'
					],
					'no-construct': true,
					'no-debugger': true,
					'no-duplicate-key': true,
					'no-duplicate-variable': true,
					'no-empty': false,
					'no-eval': true,
					'no-inferrable-types': true,
					'no-shadowed-variable': false,
					'no-string-literal': false,
					'no-switch-case-fall-through': true,
					'no-trailing-whitespace': true,
					'no-unused-expression': true,
					'no-unused-variable': true,
					'no-unreachable': true,
					'no-use-before-declare': true,
					'no-var-keyword': true,
					'object-literal-sort-keys': false,
					'one-line': [true,
						'check-open-brace',
						'check-catch',
						'check-else',
						'check-finally',
						'check-whitespace'
					],
					'quotemark': [true, 'single', 'avoid-escape'],
					'radix': true,
					'semicolon': true,
					'trailing-comma': [false, {
						'singleline': 'never',
						'multiline': 'always'
					}],
					'triple-equals': [true, 'allow-null-check'],
					'typedef-whitespace': [true, {
						'call-signature': 'nospace',
						'index-signature': 'nospace',
						'parameter': 'nospace',
						'property-declaration': 'nospace',
						'variable-declaration': 'nospace'
					}],
					'variable-name': false,
					'whitespace': [true,
						'check-branch',
						'check-decl',
						'check-operator',
						'check-separator',
						'check-type'
					]
				}
			}
		}))
		.pipe(tslint.report('verbose', {
			summarizeFailureOutput: true
		}));
});
