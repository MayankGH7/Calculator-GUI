let input = document.querySelector("input")
      
      mode = "calc"
      function insert(num){
        input.value += num;
        if(mode == "equal"){
          input.value = "";
          input.value += num;
          mode = "calc"
        } 
      }
      function del(){
        input.value = input.value.slice(0,-1);
        if(mode == "equal"){
          input.value = ""
        }
      }
      function clr(){
        input.value = "";
        
      }
      function calc(){
        try{
          input.value = eval(input.value)
          mode = "equal"
        }catch(err){
          input.value = "Invalid";
          mode = "equal"
        }
      }
      function operator(){
        if(input.length == 0){
          input.value = ""
        }
      }