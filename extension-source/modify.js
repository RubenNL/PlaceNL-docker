setTimeout(()=>{
	var th = document.getElementsByTagName('body')[0];
	var s = document.createElement('script');
	s.setAttribute('type', 'text/javascript');
	s.innerHTML=`
		function updateBrand() {
			window.PLACENL_USERSCRIPT_CLIENT.ws.sendPayload('brand', {
				author: 'RubenNL',
				name: 'HeadlessFirefox',
				version: document.querySelector(".toastify.toastify-right.toastify-bottom").innerText.match(/\(version (.*)\)/)[1].split(' ')[1].split('-')[0]
			});
		}
		updateBrand()
		setInterval(updateBrand, 60*1000)
	`
	th.appendChild(s);
}, 10000)