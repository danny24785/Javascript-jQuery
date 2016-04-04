function toonBrowserversie(){
	var browserName = navigator.appName;
	var browserVersion = navigator.appVersion;
	document.getElementById('divResult').innerHTML = 'U gebruikt ' + browserName + ',versie ' + browserVersion;
}