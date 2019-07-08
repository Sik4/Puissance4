$(document).ready(function() {

    var xindex= 1;
    var yindex= 1; 
    var tour = 1;
    var idPlayer = 0;
    let xtaille= $("#rowChoice").val();
    let ytaille= $("#columnChoice").val();
    // If Modulo2 tour = 0 => playerOne
    // If Modulo2 tour = 1 => playerTwo 
    
    // Table Construction based on row/column input
    $("#tableChoice").click(function(){
        console.log("Keypressed");        
        for (xindex= 0 ; xindex < xtaille ; xindex++){        
            for (yindex= 0 ; yindex < ytaille ; yindex++){
                $('#container').append('<div id ="'+xindex+yindex+'" class="empty"></div>'); // Add one div to the end of #container
            }
            $('#container').append("<hr>");
        }
        
    });             

    $(document).on('click','#container > div', function(){
        
        console.log(tour);
        if (tour%2 ==0 && $(this).hasClass('empty')){
            $(this).attr("class","playerTwo") //.attr("id" ,"id +10");
            console.log('playerTwo');
            tour++;
        }else if(tour%2 ==1 && $(this).hasClass('empty')){
            $(this).attr("class","playerOne");
            console.log('playerOne');
            tour++;
        }else{
            alert('cette case est déjà occupée')
        }
                
    }); 
    
});
