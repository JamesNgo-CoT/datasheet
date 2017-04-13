
// NAMESPACES

window.cc = window.cc || {};

cc.ui = cc.ui || {};

// UI - NOTFOUND

cc.ui.config = {
	
	render: function(app, config, eventrepo) {
		app.setBreadcrumb([{ name: 'Page Not Found' }]);
		
		app.setTitle(config.getPageTitle() || 'Data Sheet');
		
		var formTitle = config.getFormTitle();
		
		var contents = {
			top:  [
				formTitle ? '<h2>' + formTitle + '</h2>' : '',
				'<table id="datatable" class="table">',
				'</table>'
			].join(''),
			left: '',
			right: '',
			bottom: ''
		};
		
		app.setContent(contents);
		
		var dataTableColumns = config.getDataTableColumns();
		
		var dt = $('#datatable').DataTable({
			"scrollX": true,
			"columns": dataTableColumns
			
		});
		
		function success(textStatus, data) {
			console.log(data);
			var dataTableRows = eventrepo.getDataTableRows(dataTableColumns);
			dt.rows.add(dataTableRows).draw();
		};
		
		function fail(textStatus, errorThrown) {
			// TODO
		}
		
		eventrepo.fetch(config, success, fail);
	},
	
	remove: function(app) {
		
	}
};