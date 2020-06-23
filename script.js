// function stoppedTyping() {
//   if (document.getElementById("checkUrl").length > 0) {
//     document.getElementById("checkButton").disabled = false;
//   } else {
//     document.getElementById("checkButton").disabled = true;
//   }
// }

function addItem3() {
  
  var theurl = document.getElementById("checkUrl").value;
 
  if (theurl.length === 0) {
    alert("הזן כתובת אתר אינטרנט לבדיקת נגישות");
  } else {
      var element = document.getElementById("theloader");
      element.classList.add("line-scale");
     //check format
    checkurl(theurl);
  }
}

