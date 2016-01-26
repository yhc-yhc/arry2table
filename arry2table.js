'use strict';
		var ary=[];
        //create target array
		for(var i = 1; i < 55; i++){
			var obj = {};
			obj.name = "name"+i;
			obj.wxh = "wxh"+i;
            		obj.aa = "ff";
			ary.push(obj);
		}

        // get the object array's key 
        var keys = ary.length ? Object.keys(ary[0]) : (function(){console.log('array has no object')})();

        if (keys) {
            //create target table
            var table = document.createElement("table");

            //set the class for the new create table
            table.setAttribute('class', 'table table-striped table-responsive');

            //set the head of the table 
            let thead = document.createElement("thead");
            let tr = document.createElement("tr");

            let indxTh = document.createElement("th");
            let rowNum = document.createTextNode('index');
            indxTh.appendChild(rowNum);
            tr.appendChild(indxTh);

            thead.appendChild(tr);

            //create th for tr
            for (let key of keys) {
                let th = document.createElement("th");
                let value = document.createTextNode(key);
                th.appendChild(value);
                tr.appendChild(th);
            }
            table.appendChild(thead);

            //set the body of the table 
            //@important : the table must has tbody
            let tbody = document.createElement("tbody");
            table.appendChild(tbody); 

            //create tr for tbdoy 
        		ary.forEach(function(element, index){
                    let tr = document.createElement("tr");
    
                    let indxTd = document.createElement("td");
                    let rowNum = document.createTextNode(index+1);
                    indxTd.appendChild(rowNum);
                    tr.appendChild(indxTd);
    
                    //create td for tr 
                    for (let key of keys) {
                        let td = document.createElement("td");
                        let value = document.createTextNode(element[key]);
                        td.appendChild(value);
                        tr.appendChild(td);
                    }
    
                    tbody.appendChild(tr);
        		});
            
        }
