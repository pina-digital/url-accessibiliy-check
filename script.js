function fZoomInRemoveClass() {
  var feedback = document.getElementById("url-feedback");
  feedback.classList.remove("show-feedback");
}

function searchButton() {
  // var theurl = document.getElementById("check-url").value;
  var theurl = $("#check-url").val();
  var feedback = document.getElementById("url-feedback");
  if (theurl.length === 0) {
    feedback.innerHTML = "נא להזין כתובת אתר אינטרנט לבדיקה";
    feedback.classList.add("show-feedback");
    setTimeout(fZoomInRemoveClass, 5000);

    return false;
  } else if (!urlValidate(theurl)) {
    return false;
  } else {
    var element = document.getElementById("the-loader");

    element.classList.add("line-scale");
    feedback.innerHTML = "";
    feedback.classList.remove("show-feedback");

    checkurl(theurl);
  }

  return true;
}

$("#clear-button").hide();

function showButton(ev) {
  if (!$("#check-url").val()) {
    $("#clear-button").hide();
  } else if (ev.which === 13) {
    $("#clear-button").show();
    searchButton();
  } else {
    $("#clear-button").show();
  }
}

function clearButton() {
  // const theurl = document.getElementById("check-url").value;
  const theurl = $("#check-url").val();

  if (theurl.length !== 0) {
    // document.getElementById("check-url").value = "";
    $("#check-url").val("");
    $("#clear-button").hide();
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
  // document.getElementById("check-url").value = "";
  $("#check-url").val("");
  $(".results-container").css("display", "none");

  return false;
}

function scanJson() {
  $.getJSON("./data/waveNames.json", function (json) {
    console.log(json); // this will show the info it in firebug console
    for (var i = 0; i < json.length; i++) {
      var obj = json[i].name;

      console.log(obj);
    }
  });
}
