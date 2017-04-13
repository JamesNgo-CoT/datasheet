
// NAMESPACES

window.cc = window.cc || {};

cc.data = cc.data || {};

// DATA - CONFIG

cc.data.config = {
	
	data: null,
	
	getDataTableColumns: function() {
		// to do - missing data
		
		var dataTableColumns = [{
			title: 'ID',
			data: 'id',
			visible: false
		}, {
			title: 'Status',
			data: 'status',
			render: function(data, type, full, meta) {
				switch(data) {
					default:
					return data;
				}
			}
		}];
		
		dataTableColumns = dataTableColumns.concat(
			this.data.def.fields
			.filter(function(item) {
				if (item.type.toLowerCase() == 'section')
					return false;
				
				if (item.type.toLowerCase() == 'static')
					return false;
				
				return true;
			})
			.map(function(item) {
				return {
					title: item.title,
					data: item.id
				};
			})
		);
		
		return dataTableColumns;
	},
	
	getPageTitle: function() {
		if (this.data && this.data.def && this.data.def.config) {
			return this.data.def.config.pageTitle;
		}
			
		return '';
	},
	
	getFormTitle: function() {
		if (this.data && this.data.def && this.data.def.config) {
			return this.data.def.config.formTitle;
		}
			
		return '';
	},
	
	fetch: function(success, fail) {
		
		// GET SESSION ID FROM COOKIE
		var sid = $.cookie('sid') || '';
		
		// GET APP ID FROM PARAMETER
		var appMatch = window.location.href.match(/(\?|\&)app\=([^&]+)/);
		var app = appMatch && appMatch.length >= 3 ? appMatch[2] : '';
		
		// GET DEF ID FROM PARAMETER
		var defMatch = window.location.href.match(/(\?|\&)def\=([^&]+)/);
		var def = defMatch && defMatch.length >= 3 ? defMatch[2] : '';
		
		this.data = null;
		
		var dis = this;
		var url = 'https://was-intra-sit.toronto.ca/cc_sr_admin_v1/retrieve/cc_config?json={"sid":"' + sid + '","app":"' + app + '","def":"' + def + '"}'
		$.ajax(url, {
			dataType: 'json',
			method : 'GET',
			error: function(jqXHR, textStatus, errorThrown) {
				fail(textStatus, errorThrown);
			},
			success: function(data, textStatus, jqXHR) {
				dis.data = data;
				success(textStatus, data);
				// to do catch errors
			}
		});
	}
};