var sessions_array = [
    {
        id:1,
        fecha: '2018-08-15',
        duracion: '1h 5min',
        calorias: 400,
        fc: 140
    },{
        id:2,
        fecha: '2018-08-15',
        duracion: '1h 5min',
        calorias: 400,
        fc: 140
    },{
        id:3,
        fecha: '2018-08-15',
        duracion: '1h 5min',
        calorias: 400,
        fc: 140
    },{
        id:4,
        fecha: '2018-08-15',
        duracion: '1h 5min',
        calorias: 400,
        fc: 140
    },{
        id:5,
        fecha: '2018-08-15',
        duracion: '1h 5min',
        calorias: 400,
        fc: 140
    },{
        id:6,
        fecha: '2018-08-15',
        duracion: '1h 5min',
        calorias: 400,
        fc: 140
    },{
        id:7,
        fecha: '2018-08-15',
        duracion: '1h 5min',
        calorias: 400,
        fc: 140
    }
];











(function(){
    function addNewSession(e){
        let id = e.target.dataset.id;
        let obj = sessions_array.find((o)=> {
            return o.id == id;
        });
        if(obj){
            editSession(obj);
        } else {
            sessions_array.push({
                id: document.querySelector('#id').value,
                fecha: document.querySelector('#date_done').value,
                fc: document.querySelector('#fc').value,
                calorias: document.querySelector('#calories').value,
                duracion: document.querySelector('#duration').value
            })
        }
        load_sessions();
    }

    function removeSession(){
        load_sessions();
    }

    function editSession(obj){

    }

    function load_sessions(){
        function load_session(s){
            let ss = document.createElement('article');
            let lbl = document.createElement('h3');
            lbl.textContent = `Session #${s.id}`;
            let list = document.createElement('div');
            list.setAttribute('class', 'list-group');
            let item = document.createElement('a');
            item.setAttribute('data-toggle', 'modal');
            item.setAttribute('data-target', '#modal-new-sesion');
            item.setAttribute('data-id', s.id);
            item.setAttribute('class', 'list-group-item');
            let item_data = document.createElement('h4');
            item_data.setAttribute('class', 'list-group-item-heading')
            let item_secondary_data = document.createElement('p');
            item_secondary_data.setAttribute('class', 'list-group-item-text')
            item_data.textContent = `Calories: ${s.calorias}  / FC: ${s.fc}`;
            item_secondary_data.textContent =  `Date: ${s.fecha}  /  Duration: ${s.duracion}`;
            item.appendChild(item_data);
            item.appendChild(item_secondary_data);
            list.appendChild(item);
            ss.appendChild(lbl);
            ss.appendChild(list);
            btn = document.createElement('button');
            btn.textContent = 'Update';
            btn.setAttribute('class', 'btn btn-default');
            btn.setAttribute('data-toggle', 'modal');
            btn.setAttribute('data-target', '#modal-new-sesion');
            btn.setAttribute('data-id', s.id);
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                let id = e.target.dataset.id;
                let obj = sessions_array.find((o)=> {
                    return o.id == id;
                });
                let input = document.querySelector('#id');
                input.value = id;
                input = document.querySelector("#date_done");
                input.value = obj.fecha;
                input = document.querySelector("#duration");
                input.value = obj.duracion;
                input = document.querySelector("#calories");
                input.value = obj.calorias;
                input = document.querySelector("#fc");
                input.value = obj.fc;
            }, false);
            ss.appendChild(btn);

            btn = document.createElement('button');
            btn.textContent = 'Remove';
            btn.setAttribute('class', 'btn btn-default');
            btn.setAttribute('data-toggle', 'modal');
            btn.setAttribute('data-target', '#modal-new-sesion');
            btn.setAttribute('data-id', s.id);
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                removeSession(e.target.dataset.id);
            }, false);
            ss.appendChild(btn);

            container.appendChild(ss);
        }
        let container = document.querySelector('div.sessions');
        container.setAttribute('class', 'sessions');
        sessions_array.forEach(load_session);
    }

    	// handle ajax failure
	function updateUIFailure() {
        
    }
    
    function get_insights(){
        function load_insights(response){
            Object.keys(response).forEach((k)=> {
                let pb = document.querySelector(`.${k}`);
                let lbl = pb.firstChild;
                goal = response[k]['goal'];
                actual = response[k]['actual'];
                pb.setAttribute('aria-valuemax', goal);
                pb.setAttribute('aria-valuenow', actual);
                lbl.textContent = `${actual}/${goal} ${k}`;

            });

        } 

        fetch('data/insight.json')
            .then((r) => {return r.json();})
            .then((r) => {load_insights(r)})
            .catch((updateUIFailure()));
    }
    
    function load_suggested_meals(){
        
    }

    document.querySelector('.add-session').addEventListener('click', addNewSession, false);

    get_insights();

    load_sessions();

    load_suggested_meals();

    
})();




