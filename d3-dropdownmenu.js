/*-------------------------------------------------------------------*/
/* When the script is imported it extends the d3 library             */
/* to include d3.element.dropdownmenu                                */
/*-------------------------------------------------------------------*/

//(function() { 
d3.element = {}; // initialize the namespace

d3.element.dropdownmenu = function(container) { // returns a menu
	var selection = d3.select(container).append('ul')
						.attr('class', 'd3-dropdownmenu')
						.style('list-style', 'none')
						.style('padding', '0')
						.style('margin', '0px')
						.selectAll('li')

	// instance methods make closure around selection

	var data_f = function(data) { // bind the data to the list
		selection = selection.data(data);

		// the real meat is here,
		// where styling changes can be made after creation
		var create_f = function() {
			selection.enter().append('li')
				.attr('class', 'd3-dropdownmenu-option')
				.text(function(d) { return d.text })
				.style('position', 'relative')
				.style('float', 'left')
				.style('padding', '4px 8px')
				.style('background', '#eee')
				.style('border', '1px solid #fff')
				.on('mouseenter', function(d, i) {
					d3.select(this).select('ul')
						.style('display', 'block')
				})
				.on('mouseleave', function(d, i) {
					d3.select(this).select('ul')
						.style('display', 'none')
				})
				.append('ul')
				.style('list-style', 'none')
				.style('padding', '0')
				.style('margin', '0px')

				.style('position', 'absolute')
				.style('left', '0%')
				.style('top', '100%')
				.style('display', 'none')
				.selectAll('li') // for the children
				.data(function() {
					return this.parentNode.parentNode.__data__.children;
				}).enter().append('li')
				.text(function(d) { return d })
				//.style('left', '0%')
				.style('position', 'relative')
		}

		return {
			'create' : create_f
		}
	};
	
	return {
		'data' : data_f
	};
};
//})();
