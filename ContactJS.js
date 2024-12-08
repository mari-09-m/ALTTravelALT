//********* MariContact.html's SEND NOW button Confirm Alert */
document.addEventListener("DOMContentLoaded", () => {
  const name = document.getElementById("names");
  const number = document.getElementById("number");
  const mail = document.getElementById("mail");
  const msg = document.getElementById("msg");
  const send = document.getElementById("send");

  send.onclick = function () {
    if (
      name.value.trim() !== "" &&
      number.value.trim() !== "" &&
      mail.value.trim() !== "" &&
      msg.value.trim() !== ""
    ) {
      alert("Thanks for your message!");
      window.location.href = "index.html"; // redirect to our home page
    } else {
      alert("Please fill out the form completely.");
    }
  };
});
