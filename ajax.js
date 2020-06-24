function checkurl(theURL) {
  $(document).ready(function () {
    var result = $("#result");

    //var theURL = "https://pina.co.il/";
    $.ajax({
      type: "GET",
      // url: "https://wave.webaim.org/api/request?key=Gf4NdsFF1629&url=" + theURL, //Avivit
      success: function (data) {
        $(".loader-div").fadeOut();

        result.append(
          "" +
          '<div class="postContainer">' +
          "<p> Success:" +
          data.status.success +
          "</p>" +
          "<h2> Page Title: " +
          data.statistics.pagetitle +
          "</h2>" +
          "<h3> Page URL: " +
          data.statistics.pageurl +
          "</h3>" +
          "<p> Errors: " +
          data.categories.error.count +
          "</p>" +
          "<p> Contrast Errors: " +
          data.categories.contrast.count +
          "</p>" +
          "<p> Alerts: " +
          data.categories.alert.count +
          "</p>" +
          "<p> Features: " +
          data.categories.feature.count +
          "</p>" +
          "<p> Structure Elements: " +
          data.categories.structure.count +
          "</p>" +
          "<p> aria: " +
          data.categories.aria.count +
          "</p>" +
          "<br></br>" +
          "<p> Creditsremaining: " +
          data.statistics.creditsremaining +
          "</p>" + //lior 2
            "</div>"
        );
      },
      // error: function() {
      //     $('#result').text('Error!');
      // }
      error: function (request, status, error) {
        console.log(request.responseText);
      },
    });
  });
}
