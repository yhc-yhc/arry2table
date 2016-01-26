function array2table(paramObj){
    'use strict';
        //valadate the param fun 
        function getType(o) { 
            var _t;
            return ((_t = typeof(o)) == "object" ? o==null && "null" ||  Object.prototype.toString.call(o).slice(8,-1):_t).toLowerCase(); 
        } 
        if(getType(paramObj) !='object'){
            console.log('the param is not current!');
            return;
        }

        let ary= paramObj.dataSource || [];
        let elemt = paramObj.tarElmt || null;
        let tbClass = paramObj.tbClass || '';
        let showIdx = paramObj.showIdx || false;
        let callbk = paramObj.callbk || [];//every td of the oprations
        let length = ary.length;

        if (!length ) {
            console.log('ary has no object!');
            return;
        }

        if (!elemt ) {
            console.log('the element of the table is not set!');
            return;
        }
        // get the object array's key 
        let keys = Object.keys(ary[0]);

        //create target table
        let table = document.createElement("table");

        //set the class for the new create table
        table.setAttribute('class', tbClass);

        //set the head of the table 
        let thead = document.createElement("thead");
        let tr = document.createElement("tr");

        if(showIdx){
            let indxTh = document.createElement("th");
            let rowNum = document.createTextNode('index');
            indxTh.appendChild(rowNum);
            tr.appendChild(indxTh);
        }

        //create th for tr
        for (let key of keys) {
            let th = document.createElement("th");
            let value = document.createTextNode(key);
            th.appendChild(value);
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        table.appendChild(thead);

        //set the body of the table 
        // @important : the table must has tbody
        let tbody = document.createElement("tbody");
        table.appendChild(tbody); 

        //create tr for tbdoy 
        ary.forEach(function(element, index){
            let tr = document.createElement("tr");

            if (showIdx) {
                let indxTd = document.createElement("td");
                let rowNum = document.createTextNode(index+1);
                indxTd.appendChild(rowNum);
                tr.appendChild(indxTd);
            }

            //create td for tr 
            for (let key of keys) {
                let td = document.createElement("td");
                let value = document.createTextNode(element[key]);
                td.appendChild(value);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        });
        elemt.appendChild(table);
    }
//use like this 
'use strict';
	let ctx = document.getElementsByClassName("col-xs-12")[0];
    let paramObj ={
        dataSource  : ary,
        tarElmt     : ctx,
        tbClass     : 'table table-striped',
        showIdx     : true
    }
    array2table(paramObj)
