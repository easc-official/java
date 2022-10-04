const url = document.getElementsByTagName("li");
const length = url.length;
const body = document.querySelector('body');

body.classList.add('slide-out-left');
setTimeout(() =>{
    body.classList.remove('slide-out-left');
  }, 1000);

for(i=0; i<=length-1;i++){
    const elem = document.getElementById(url[i].firstChild.id);
    let programNum=0;
    elem.addEventListener('click', (e)=>{
        e.preventDefault();
         
        setTimeout(() =>{
            var programs =["./assets/programs/program1.html",'./assets/programs/program2.html',
            './assets/programs/program3.html','./assets/programs/program4.html',
            './assets/programs/program5.html','./assets/programs/program6.html',
            './assets/programs/program7.html','./assets/programs/program8.html',
            './assets/programs/program9.html','./assets/programs/program10.html'];
            
            window.location.href = programs[programNum]
        }, 150);
    });
    programNum+=i;
}