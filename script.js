```javascript
const form = document.getElementById("waitlist-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    await fetch("https://script.google.com/macros/s/AKfycbzaxhtLn_ymXuAjfZGPQteVKRJrVrBmuglhdX2rj4SW_Vz_BiFG09imxpcrVKVFkKHs/exec", {
        method: "POST",
        body: JSON.stringify({
            name: name,
            email: email
        })
    });

    document.getElementById("success-message").innerText =
        "You're on the waitlist.";

    form.reset();
});
```
