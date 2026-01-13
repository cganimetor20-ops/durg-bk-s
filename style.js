<script>
document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector(".vertical-form");
  const button = form.querySelector("button");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("first-name").value.trim();
    const lastName  = document.getElementById("last-name").value.trim();
    const message   = document.getElementById("message").value.trim();

    // Basic validation
    if (firstName === "" || message === "") {
      alert("Please fill required fields!");
      return;
    }

    // Button loading state
    button.innerText = "Sending...";
    button.disabled = true;

    // Simulate submit (API / submit-form)
    setTimeout(() => {
      alert("Message sent successfully 🙏");

      form.reset();
      button.innerText = "Submit";
      button.disabled = false;

      // Uncomment if you want actual submit
      // form.submit();

    }, 1500);
  });

});
</script>
