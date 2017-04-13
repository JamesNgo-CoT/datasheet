
// NAMESPACES

window.cc = window.cc || {};

cc.ui = cc.ui || {};

// UI - NOTFOUND

cc.ui.notfound = {
	
	render: function(app) {
		app.setBreadcrumb([{ name: 'Page Not Found' }]);
		
		app.setTitle('Page Not Found');
		
		var contents = {
			top:  [
				'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra tellus, vel tempor dolor pretium non. Vestibulum nisi nibh, rhoncus quis dapibus at, rutrum at lacus. Donec semper elit ut dui efficitur, id dictum erat auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus lacinia libero nisi, eget commodo mi varius interdum. Pellentesque suscipit consectetur egestas. Cras pharetra vitae ligula id dapibus. Integer sed nisl sit amet ipsum vehicula fermentum. Aenean volutpat urna ac lacinia eleifend. Donec interdum non tortor ut vulputate. Nam lobortis bibendum diam id efficitur. Nulla ultricies risus ac massa eleifend malesuada. Pellentesque pulvinar turpis massa, sed mattis enim molestie non. Nulla velit velit, ultrices nec feugiat eget, mattis et ipsum.</p>',
				'<p>Maecenas auctor mattis ex non fermentum. Maecenas congue vestibulum quam sit amet viverra. Nullam consequat rhoncus dui euismod auctor. Nullam scelerisque consectetur odio. Morbi convallis massa nisl, ut ornare ipsum volutpat vitae. Aenean facilisis dolor eget dolor pharetra, vitae suscipit tortor dignissim. In porta hendrerit urna. Maecenas sit amet ultricies dui. In hac habitasse platea dictumst. Fusce mi dolor, fermentum ut lacus non, tincidunt lobortis ligula. In ut erat vitae lacus bibendum dignissim. Pellentesque scelerisque magna urna, at imperdiet metus suscipit id. Mauris orci arcu, tempor ut mi vitae, mollis bibendum magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius fringilla orci eu semper. Mauris ultricies lobortis arcu ac feugiat.</p>',
			].join(''),
			left: '',
			right: '',
			bottom: ''
		};
		
		app.setContent(contents);
	},
	
	remove: function(app) {
		
	}
};