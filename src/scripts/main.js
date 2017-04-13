
// NAMESPACE

window.cc = window.cc || {};

// MAIN

cc.main = {
	
	app: null,
	
	state: null,
	
	load: function() {
		this.app = new cc.Extended_CotApp('');
		this.app.setBreadcrumb(['']);
		
		var dis = this;
		this.app.render(function () {
			dis.render();
		});
	},
	
	render: function() {
		
		var dis = this;
		
		function success(textStatus, data) {
			data = data || {};
			
			// REMOVE
			
			switch(dis.state) {
				case 'NOT_FOUND':
				cc.ui.notfound.remove(dis.app);
				break;
				
				case 'NOT_SIGNEDIN':
				cc.ui.notsignedin.onSignin = [];
				cc.ui.notsignedin.remove(dis.app);
				break;
				
				case 'CONFIG':
				cc.ui.config.remove(dis.app);
				break;
			}
			
			// SWITCH STATE
			
			if (data.app && data.def) {
				if (data.user) {
					dis.state = 'CONFIG';
				} else {
					dis.state = 'NOT_SIGNEDIN';
				}
			} else {
				dis.state = 'NOT_FOUND';
			}
			
			// RENDER
			
			switch(dis.state) {
				case 'NOT_FOUND':
				cc.ui.notfound.render(dis.app);
				break;
				
				case 'NOT_SIGNEDIN':
				cc.ui.notsignedin.onSignin.push(function(data) { dis.render(); });
				cc.ui.notsignedin.render(dis.app, cc.data.config, cc.data.session);
				break;
				
				case 'CONFIG':
				cc.ui.config.render(dis.app, cc.data.config, cc.data.eventrepo);
				break;
			}
		}
		
		function fail(textStatus, errorThrown) {
			// TODO
		}
		
		cc.data.config.fetch(success, fail);
	}
};

// DOCUMENT READY

$(function() {
	cc.main.load();
});