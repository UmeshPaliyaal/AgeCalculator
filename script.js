let userInput = document.getElementById("date");
userInput.max =new Date().toISOString().split("T")[0];
let btn = document.getElementById("btn");
let result = document.getElementById("result");
let res = document.querySelector(".res");

btn.addEventListener("click",function CalculateAge(){
    const originalClss = btn.className
    setTimeout(() => {
        btn.className = "btnnn"
        setTimeout(() => {
            btn.className = originalClss
        }, 100);
    }, 0.2);

    

     let birthDate =new Date(userInput.value);

     let d1 = birthDate.getDate();
     let m1 = birthDate.getMonth() +1 ;
     let y1 = birthDate.getFullYear();

     let today = new Date();

     let d2 = today.getDate();
     let m2 = today.getMonth() +1 ;
     let y2 = today.getFullYear();
     
     let y3 ,d3 ,m3 ;
      y3 = y2-y1;

      if(m2>= m1){
        m3 = m2-m1;
      }else{
        y3--;
        m3 = 12 + m2 -m1
      }

      if(d2>=d1){
                 d3 =d2-d1    
      }else{
        m3--;
        d3 = getdaysInMonth(y1 , m1) + d2 - d1;
      }
      if(m3<0){
        m3=11;
        y3--
      }
      res.style.display ="block"
      result.style.display = "block"
      if(userInput.value == ''){
        result.innerHTML = 'please select any date'
    }else{
      result.innerHTML = `You are <span> ${y3}</span> years <span> ${m3} </span> months <span> ${d3} </span> days old`
    }

      function getdaysInMonth(year , month  ){
             return new Date(year, month , 0).getDate();
      }

})