(function(){
    function load_sessions(){

    }
    
    function get_insights(){
        function load_insights(response){
            /*let steps = response.steps;
            let floors = response.floors;
            let min_effort = response.min_effort;*/

            let insights = document.querySelector(".insights .row");
            let container = document.createElement('div');
            Object.keys(response).forEach((k)=> {
                let pb = document.querySelector(k);
                let lbl = pb.firstChild();
                goal = response[k]['goal'];
                actual = response[k]['actual'];
                pb.setAttribute('aria-valuemax', goal);
                pb.setAttribute('aria-valuenow', actual);
                lbl.textContent(`${actual}/${goal} ${k}`);

            });

        } 

        fetch('/insights.json')
            .then((r) => {return r.json();})
            .then((r) => {load_insights(r)})
            .cathc((updateUIFailure()));
    }
    
    function load_suggested_meals(){
        
    }

    get_insights();
})();

