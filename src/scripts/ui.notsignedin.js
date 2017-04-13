
// NAMESPACES

window.cc = window.cc || {};

cc.ui = cc.ui || {};

// UI - NOT SIGNED IN

cc.ui.notsignedin = {
	
	onSignin: [],
	
	render: function(app, config, session) {
		app.setBreadcrumb([{ name: 'Sign In' }]);
		
		app.setTitle(config.getPageTitle() || 'Data Sheet');
		
		var formTitle = config.getFormTitle();
		
		var contents = {
			top:  '',
			left: [
				formTitle ? '<h2>' + formTitle + '</h2>' : '',
				'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra tellus, vel tempor dolor pretium non. Vestibulum nisi nibh, rhoncus quis dapibus at, rutrum at lacus. Donec semper elit ut dui efficitur, id dictum erat auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus lacinia libero nisi, eget commodo mi varius interdum. Pellentesque suscipit consectetur egestas. Cras pharetra vitae ligula id dapibus. Integer sed nisl sit amet ipsum vehicula fermentum. Aenean volutpat urna ac lacinia eleifend. Donec interdum non tortor ut vulputate. Nam lobortis bibendum diam id efficitur. Nulla ultricies risus ac massa eleifend malesuada. Pellentesque pulvinar turpis massa, sed mattis enim molestie non. Nulla velit velit, ultrices nec feugiat eget, mattis et ipsum.</p>',
				'<p>Maecenas auctor mattis ex non fermentum. Maecenas congue vestibulum quam sit amet viverra. Nullam consequat rhoncus dui euismod auctor. Nullam scelerisque consectetur odio. Morbi convallis massa nisl, ut ornare ipsum volutpat vitae. Aenean facilisis dolor eget dolor pharetra, vitae suscipit tortor dignissim. In porta hendrerit urna. Maecenas sit amet ultricies dui. In hac habitasse platea dictumst. Fusce mi dolor, fermentum ut lacus non, tincidunt lobortis ligula. In ut erat vitae lacus bibendum dignissim. Pellentesque scelerisque magna urna, at imperdiet metus suscipit id. Mauris orci arcu, tempor ut mi vitae, mollis bibendum magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius fringilla orci eu semper. Mauris ultricies lobortis arcu ac feugiat.</p>'
			].join(''),
			right: [
				'<div class="panel panel-primary">',
					'<div class="panel-heading">',
						'<h3 class="panel-title"><span class="glyphicon glyphicon-log-in" aria-hidden="true"></span> Sign In</h3>',
					'</div>',
					'<div class="panel-body">',
						'<form id="signin_form">',
							'<div class="form-group">',
								'<label for="username">User Name</label>',
								'<input type="username" class="form-control" name="username" id="username">',
							'</div>',
							'<div class="form-group">',
								'<label for="password">Password</label>',
								'<input type="password" class="form-control" name="password" id="password">',
							'</div>',
							'<button class="btn btn-primary">',
								'Submit',
							'</button>',
						'</form>',
					'</div>',
				'</div>'
			].join(''),
			bottom: ''
		};
		
		app.setContent(contents);
		
		var dis = this;
		$('#signin_form').on('submit', function(e) {
			e.preventDefault();
			
			function success(textStatus, data) {
				console.log(dis.onSignin.length);
				
				for (var i = 0; i < dis.onSignin.length; i++) {
					dis.onSignin[i].call(dis, data);
				}
			};
			
			function fail(textStatus, errorThrown) {
				// TODO
			}
			
			session.signin(config.data.app.app, $('#username').val(), $('#password').val(), success, fail);
		});
	},
	
	remove: function(app) {}
}