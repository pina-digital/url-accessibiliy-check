function checkurl(theURL) {
  $(".results-container").css("display", "block");
  $(".loader-main").css("display", "flex");

  $(document).ready(function () {
    var result = $(".results-container");

    //var theURL = "https://pina.co.il/";
    // Old key: Gf4NdsFF1629
    // loaderText.classList.add("display-block");

    $.ajax({
      type: "GET",
      url:
        "https://wave.webaim.org/api/request?key=YWZgSrRb1799&reporttype=2&url=" +
        theURL, //Avivit
      success: function (data) {
        $(".loader-div").fadeOut();
        $("#loader-text").fadeOut();
        $(".loader-main").css("display", "none");

        console.log(data);

        if (data.status.success) {
          result.append(
            "" +
              '<div class="postContainer">' +
              // "<p> הצלחה:" +
              // data.status.success +
              // "</p>" +
              "<h2> כתובת העמוד: " +
              data.statistics.pageurl +
              "</h2>" +
              "<h3> כותרת העמוד: " +
              data.statistics.pagetitle +
              "</h3>" +
              "<p> שגיאות: " +
              data.categories.error.count +
              "</p>" +
              // "<p> alt missing: " +
              // data.categories.error.items.alt_missing.count +
              // "</p>" +
              // "<p> label missing: " +
              // data.categories.error.items.label_missing.count +
              // "</p>" +
              // "<p> language missing: " +
              // data.categories.error.items.language_missing.count +
              // "</p>" +
              "<p> שגיאות ניגודיות: " +
              data.categories.contrast.count +
              "</p>" +
              "<p> התראות: " +
              data.categories.alert.count +
              "</p>" +
              "<p> תכונות: " +
              data.categories.feature.count +
              "</p>" +
              "<p> אלמנטים מבניים: " +
              data.categories.structure.count +
              "</p>" +
              "<p> אריה: " +
              data.categories.aria.count +
              "</p>" +
              "<br></br>" +
              "<p> קרדיטים נותרים: " +
              data.statistics.creditsremaining +
              "</p>" + //lior 2
              "</div>"
          );
        } else result.append("some kind of error");
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
