// submitting forms

const formsList = document.querySelectorAll("form");

formsList.forEach((form) => {
    console.log("form");
    form.addEventListener("submit", async(event) => {

        console.log(form);
        event.preventDefault();


        let response = await fetch(
            window.location.origin + "/send.php", {
                method: "POST",
                body: new URLSearchParams(new FormData(form)),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        let result = await response.json(); // через echo, print_r или var_dump. 

        console.log(result); // Выводим этот результат выполнения пхп
    });
});