
	$(document).ready(function(){

///////////////////// from editable

$('a').click(function(e) {
   // e.preventDefault();
});

$.editableFactory = {
    'label': {
        toEditable: function($this,options){
            $this.append('<input value="'+$this.data('editable.current')+'"/>');
        },
        getValue: function($this,options){
            return $this.children().val();
        }
    },


    'linkitem': {
        toEditable: function($this,options){

var li = $($this.data('editable.current'));

 		$.each( li,
                    function(){
			var a = this.getElementsByTagName("a")[0];
			var form = 'url:<input type="text" name="url" value="'+a+'" />';
			form += 'text:<input type="text" name="text" value="'+a.text+'" />';
			form += 'title:<input type="text" name="title" value="'+a.title+'" />';

			var d =  this.getElementsByTagName("span")[0];
			form += 'description:<input type="text" name="description" value="'+$(d.firstChild).text()+'" />';
			$this.append(form);
                    }
                )
        },

  getValue: function($this,options){
		var inputs = $($this.children());
	    var value = "";
            inputs.each(
                function(){
                        value += $(this).val() + " * ";
                }
            )
            return value;
        }
    }
}
$('li.label').editable({
                            type:'label'
                        }); 
$('li.linkitem').editable({
                            type:'linkitem',
/*
as: $('li.link').children("a"),
linktext: $('li.link').children("a").text(),
title: $('li.link').attr("title")
*/
			 editBy:'dblclick' 
                        });

////////////////////////////////////////

		$('ul').nestedSortable({ // was 'ol.sortable'
			disableNesting: 'no-nest',
			forcePlaceholderSize: true,
			handle: 'div',
			helper:	'clone',
			items: 'li',
			maxLevels: 3,
			opacity: .6,
			placeholder: 'placeholder',
			revert: 250,
			tabSize: 25,
			tolerance: 'pointer',
			toleranceElement: '> div'
		});

		$('#serialize').click(function(){
			serialized = $('ol.sortable').nestedSortable('serialize');
			$('#serializeOutput').text(serialized+'\n\n');
		})

		$('#toHierarchy').click(function(e){
			hiered = $('ol.sortable').nestedSortable('toHierarchy', {startDepthCount: 0});
			hiered = dump(hiered);
			(typeof($('#toHierarchyOutput')[0].textContent) != 'undefined') ?
			$('#toHierarchyOutput')[0].textContent = hiered : $('#toHierarchyOutput')[0].innerText = hiered;
		})

		$('#toArray').click(function(e){
			arraied = $('ol.sortable').nestedSortable('toArray', {startDepthCount: 0});
			arraied = dump(arraied);
			(typeof($('#toArrayOutput')[0].textContent) != 'undefined') ?
			$('#toArrayOutput')[0].textContent = arraied : $('#toArrayOutput')[0].innerText = arraied;
		})

	});

	function dump(arr,level) {
		var dumped_text = "";
		if(!level) level = 0;

		//The padding given at the beginning of the line.
		var level_padding = "";
		for(var j=0;j<level+1;j++) level_padding += "    ";

		if(typeof(arr) == 'object') { //Array/Hashes/Objects
			for(var item in arr) {
				var value = arr[item];

				if(typeof(value) == 'object') { //If it is an array,
					dumped_text += level_padding + "'" + item + "' ...\n";
					dumped_text += dump(value,level+1);
				} else {
					dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
				}
			}
		} else { //Strings/Chars/Numbers etc.
			dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
		}
		return dumped_text;
	}

