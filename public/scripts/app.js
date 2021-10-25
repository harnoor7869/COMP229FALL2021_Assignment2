(function(){

    function Start()
    {
        console.log("App Started...");

        if(document.title === "Contact")
        {
            let sendButton = document.getElementById("sendButton");
            let cancelButton = document.getElementById("cancelButton");
            let form = document.forms[0];

            sendButton.addEventListener("click",(event) => {
                event.preventDefault();

                let fullName = document.getElementById("fullName").value;
                let email = document.getElementById("email").value;
                let telNumber = document.getElementById("telNumber").value;
                let message = document.getElementById("message").value;

                console.info(`Full Name     : ${fullName}
                Email          : ${email}
                Phone Number   : ${telNumber}
                Message        : ${message}`);

                form.reset();
            });

            cancelButton.addEventListener("click",(event) => {
                event.preventDefault();
                if(confirm("Are you sure?"))
                {
                    location.href = "/";
                }
            });
        }

        let deleteButtons = document.querySelectorAll('.btn-danger');	

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event) => {
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/contacts-list');   //redirects page
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();