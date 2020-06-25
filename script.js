function pressButton() {
  var theurl = document.getElementById("checkUrl").value;
  var feedback = document.getElementById("url-feedback");

  if (theurl.length === 0) {
    feedback.innerHTML = "נא להזין כתובת אתר אינטרנט";
    feedback.classList.add("show-feedback");
    return false;
  } else if (!urlValidate(theurl)) {
    return false;
  } else {
    var element = document.getElementById("theloader");
    element.classList.add("line-scale");
    feedback.innerHTML = "";
    feedback.classList.remove("show-feedback");

    checkurl(theurl);
  }
  return true;
}

function urlValidate(theurl) {
  var feedback = document.getElementById("url-feedback");
  var pattern = /^((http(s){0,1}\:\/\/){0,1}([a-z|A-Z|0-9|\.|\-|_]){4,255}(\:\d{1,5}){0,1}){0,1}((\/([a-z|A-Z|0-9|\.|\-|_]|\%[A-F|a-f|0-9]{2}){1,255}){1,255}\/{0,1}){0,1}(|\/{0,1}\?[a-z|A-Z|0-9|\.|\-|_]{1,255}\=([a-z|A-Z|0-9|\.|\-|_|\+|\:]|\%[A-F|a-f|0-9]{2}|\&[a-z|A-Z]{2,12}\;){0,255}){0,1}((\&[a-z|A-Z|0-9|\.|\-|_]{1,255}\=([a-z|A-Z|0-9|\.|\-|_|\+|\:]|\%[A-F|a-f|0-9]{2}|\&[a-z|A-Z]{2,12}\;){0,255}){0,255})(\/{0,1}|\#([a-z|A-Z|0-9|\.|\-|_|\+|\:]|\%[A-F|a-f|0-9]{2}|\&[a-z|A-Z]{2,12}\;){0,255})$/;

  if (pattern.test(theurl)) {
    feedback.innerHTML = "הכתובת שהוזנה הינה כתובת חוקית";
    feedback.classList.add("show-feedback");
    return true;
  }
  feedback.innerHTML = "הכתובת שהוזנה אינה כתובת חוקית";
  feedback.classList.add("show-feedback");
  return false;
}
