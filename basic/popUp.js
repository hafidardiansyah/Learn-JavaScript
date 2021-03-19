var name = prompt("Enter your name :");
// untuk memasukkan data
var confirm = confirm("Do you want to join library " + name + "?");
// untuk mengkonfirmasi dan menghasilkan true or false

if (confirm === true) {
  alert("Welcome to library " + name);
  // untuk menampilkan data
} else {
  alert("Thank you");
}
