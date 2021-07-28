$(document).ready(function () {
 
  productsAdd();
  $("#updateButton").click(function(){
    if ($("#updateButton").text() == "Update") {
      $("#updateButton").text("Add");
  }
   if ($("#firstname").val() != null && $("#firstname").val() != '') {
     
  if ($("#contactTable tbody").length == 0) {
    $("#contactTable").append("<tbody></tbody>");
}

$("#contactTable tbody").append(
    "<tr>" +
    "<td>" +
    `<button type='button' 
             onclick='productDisplay(this);' 
             class='btn btn-default'>
    Edit
  </button>` +
  "<td>" + $("#image").val() + "</td>" +
    "<td>" + $("#firstname").val() + "</td>" +
    "<td>" + $("#lastname").val() + "</td>" +
    "<td>" + $("#email").val() + "</td>" +
    "<td>" + $("#phoneno").val() + "</td>" +
    "<td>" +
    `<button type='button' 
             onclick='productDelete(this);' 
             class='btn btn-default'>
    delete
  </button>` +
    "</td>" +
    "</tr>");

        // Clear form fields
      $("#firstname").val("");
    $("#lastname").val("");
    $("#email").val("");
    $("#phoneno").val("");
      
      
    }
  var cols = _row.children("td");
  });
  $("#SaveData").click(function(){
  localStorage.setItem("firstname", firstname);
  });
});
function productDelete(ctl) {
  $(ctl).parents("tr").remove();


}
function productDisplay(ctl) {
  $(ctl).parents("tr").remove();


  _row = $(ctl).parents("tr");
  var cols = _row.children("td");
  $("#firstname").val($(cols[2]).text());
  $("#lastname").val($(cols[3]).text());
  $("#email").val($(cols[4]).text());
  // Change Update Button Text
  $("#updateButton").text("Update");
 
}
