function pressButton() {
  var theurl = document.getElementById("checkUrl").value;
  var feedback = document.getElementById("url-feedback");
  var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

  if (theurl.length === 0) {
    feedback.innerHTML = "נא להזין כתובת אתר אינטרנט";
    feedback.classList.add("show-feedback");
  } else {
    var element = document.getElementById("theloader");
    element.classList.add("line-scale");
    //check format
    checkurl(theurl);
    feedback.innerHTML = "";
    feedback.classList.remove("show-feedback");
  }
}

function urlValidate() {
  var url = document.getElementById("checkUrl").value;
  var feedback = document.getElementById("url-feedback");

  var pattern = /(http[s]?:\/\/)?[^\s(["<,>]\.[^\s[",><]/;
  if (pattern.test(url)) {
    feedback.innerHTML = "הכתובת שהוזנה הינה כתובת חוקית";
    feedback.classList.add("show-feedback");
    return true;
  }
  feedback.innerHTML = "הכתובת שהוזנה אינה כתובת חוקית";
  feedback.classList.add("show-feedback");
  return false;
}
