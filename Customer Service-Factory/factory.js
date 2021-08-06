app.factory("addSpace",function(){
    return {
        processString:function(input){
            console.log("inside scope")
                var output ="";
                for(var i=0;i<input.length;i++){
                    if(i>0 && input[i]==input[i].toUpperCase()){
                        output = output+" ";
                    }
                    output = output+input[i];
                }
                return output; 
        }
    }
});