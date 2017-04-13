
// NAMESPACES

window.cc = window.cc || {};

cc.data = cc.data || {};

// DATA - CONFIG

cc.data.eventrepo = {
	
	data: null,
	
	getDataTableRows: function(columns) {
		if (!this.data)
			return [];
		
		var rows = [];
		
		for (var i = 0; i < this.data.length; i++) {
			var rowValue = {};
			
			for (var i2 = 0; i2 < columns.length; i2++) {
				var key = columns[i2].data;
				
				if (this.data[i][key]) {
					rowValue[key] = this.data[i][key];
					continue;
				}
				
				if (this.data[i]['payload'][key]) {
					rowValue[key] = this.data[i]['payload'][key];
					continue;
				}
				
				rowValue[key] = '';
			}
			
			rows.push(rowValue);
			
		}
		
		return rows;
	},
	
	fetch: function(config, success, fail) {
		var dis = this;
		var url = 'https://was-intra-sit.toronto.ca/cc_sr_admin_v1/retrieve/eventrepo/' + config.data.app.app + '?json={"limit":1000,"repo":"' + config.data.app.app + '/' + config.data.def.def + '"}&sid=' + config.data.user.sid;
		$.ajax(url, {
			dataType: 'json',
			method : 'GET',
			error: function(jqXHR, textStatus, errorThrown) {
				fail(textStatus, errorThrown);
			},
			success: function(data, textStatus, jqXHR) {
				for (var i = 0; i < data.length; i++) {
					data[i].payload = JSON.parse(data[i].payload);
				}
				
				dis.data = data;
				success(textStatus, data);
			}
		});
	}
};