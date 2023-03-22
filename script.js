
let count=document.querySelector('.super')

setTimeout(()=>{
   console.log(1);
 
  
   count.innerText  = 10;
   setTimeout(()=>{
    console.log(2);
    count.innerText  =  9;
    setTimeout(()=>{
        console.log(3);
        count.innerText  =  9;
        setTimeout(()=>{
            console.log(4);
            count.innerText  = 7;
            setTimeout(()=>{
                console.log(5);
                count.innerText  =  6;
                setTimeout(()=>{
                    console.log(5);
                    count.innerText  =  5;
                    setTimeout(()=>{
                        console.log(5);
                        count.innerText  =  4;
                        setTimeout(()=>{
                            console.log(5);
                            count.innerText  =  3;
                            setTimeout(()=>{
                                console.log(5);
                                count.innerText  =  2;
                                setTimeout(()=>{
                                    console.log(5);
                                    count.innerText  =  1;
                                    setTimeout(()=>{
                                        console.log(5);
                                        count.innerText  =  'HAPPY INDEPENDENCE DAY';
                                     },1000);
                                 },1000);
                             },1000)
                         },1000)
                     },1000)
                 },1000)
             },1000)
         },1000)
     },1000)
 },1000)

},1000)

