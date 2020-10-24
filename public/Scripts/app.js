// IIFE - Immediately Invoked Function Expression
(function () {
    function Start() 
    {
        console.log("App Started...");

        let dangerButtons = document.getElementsByClassName("btn-danger");

        for (const button of dangerButtons) {
            button.addEventListener('click', (event) => {
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    location.href = '/business';
                }
            });
        }        
    }

    window.addEventListener("load", Start);
})();