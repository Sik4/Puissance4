$(document).ready(function() {

    var xindex= 1;
    var yindex= 1; 
    var tour = 1;
    var idPlayer = 0;
    // If Modulo2 tour = 0 => playerOne
    // If Modulo2 tour = 1 => playerTwo 
    
    // Table Construction based on row/column input
    $("#tableChoice").click(function(){
        console.log("Keypressed"); 
        let xtaille= $("#columnChoice").val();
        let ytaille= $("#rowChoice").val();
        for (xindex= 0 ; xindex < xtaille ; xindex++){
        
            for (yindex= 0 ; yindex < ytaille ; yindex++){
                $('#container').append('<div id ="'+xindex+yindex+'" class="empty"></div>'); // Add one div to the end of #container
            }
            $('#container').append("<hr>");
        }
    }); 
    $('#tableChoice').click(function(e){
        e.preventDefault();
        
    });
    $('#container > div').click(function(){
        console.log(tour);
        if (tour%2 ==0){
            $(this.attr("class","playerOne"));
            console.log('playerOne');
            tour++;
        }else if(tour%2 ==1){
            $(this.attr("class","playerTwo"));
            console.log('playerTwo');
            tour++;
        }
    });   
});
