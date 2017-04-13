
// NAMESPACE

window.cc = window.cc || {};

// APP DEF DATA

cc.appdefData = {
	get_config_url: function() {
		return 'https://was-intra-sit.toronto.ca/cc_sr_admin_v1/retrieve/cc_config?json={"app":"' + this.app + '","def":"' + this.def + '"}';
	},
	
	app: null,
	
	def: null,
	
	config: null,
	
	fetch: function(cbk) {
		
		// GET APP ID FROM PARAMETER
		var appMatch = window.location.href.match(/(\?|\&)app\=([^&]+)/);
		var app = appMatch && appMatch.length >= 3 ? appMatch[2] : null;
		
		// GET DEF ID FROM PARAMETER
		var defMatch = window.location.href.match(/(\?|\&)def\=([^&]+)/);
		var def = defMatch && defMatch.length >= 3 ? defMatch[2] : null;
		
		
		if (!app || !def) { // MISSING PARAMETER
			
			cbk(0, this);
			
		} else if (this.app == app && this.def == def && this.config) { // PARAMETER ALREADY FETCHED
			
			cbk(2, this); // TODO - SESSION
			
		} else { // OTHER SCENARIOS
			
			this.app = app;
			this.def = def;
			this.config = null;
			
			var dis = this;
			$.ajax(
				this.get_config_url(),
				{
					dataType: 'json',
					method : 'GET',
					error: function(jqXHR, textStatus, errorThrown) {
						cbk(0, dis);
					},
					success: function(data, textStatus, jqXHR) {
						if (!data.error && data.app && data.def) {
							dis.config = data;
							cbk(2, dis);
						} else {
							cbk(0, dis);
						}
					}
				}
			);
		}
	}
};