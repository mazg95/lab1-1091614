(function(){
    function addNewSession(){
        alert('HOLA');
    }

    function removeSession(){

    }

    function editSession(){

    }

    function load_sessions(){
        function load_ex(){

        }

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
]


