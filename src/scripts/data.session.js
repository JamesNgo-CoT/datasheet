
// NAMESPACES

window.cc = window.cc || {};

cc.data = cc.data || {};

// DATA - SESSION

cc.data.session = {
	
	data: null,
	
	signin: function(app, user, password, success, fail) {
		var dis = this;
		var url = 'https://was-intra-sit.toronto.ca/cc_sr_admin_v1/session/';
		$.ajax(url, {
			data: {
				app: app,
				user: user,
				pwd: password
			},
			dataType: 'json',
			method : 'POST',
			error: function(jqXHR, textStatus, errorThrown) {
				fail(textStatus, errorThrown);
			},
			success: function(data, textStatus, jqXHR) {
				$.cookie('sid', data.sid);
				$.cookie('userID', data.userID);
				
				dis.data = data;
				success(textStatus, data);
			}
		});
	},
	
	signout: function() {
		$.removeCookie('sid');
		$.removeCookie('userID');
	}
}