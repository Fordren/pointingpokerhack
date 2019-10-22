    $(document).ready(function(){
        $("#playerName").off('click').on('click', function (e) {
            var name = $("#playerName").text();
            if (name.startsWith("Denys")) {
                var api = $("#apiAccessLink a").text();
                $.getJSON(api, function(data) {
                    var result = "";
                    $.each( data.Players, function( i, player) {
                        if (!player.Name.startsWith("Denys")) {
                            result = result + player.Name + " : " + player.Points + "\n";
                        }
                    });
                    alert(result);
                });
            }
        });
    });
    