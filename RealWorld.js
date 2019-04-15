const baseConfig = {
	appName: 'Slick',
	apiKey: 'secretPassword',
	apiBaseUrl: 'http://slickapp.co/api/'
}

const localConfig = Object.assign({}, baseConfig, {
	apiKey: 'localPassword',
	apiBaseUrl: 'http://localhost:3000/api'
});

console.log(localConfig.appName, localConfig.apiBaseUrl);