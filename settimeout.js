var i=0
var c=['green','yellow','red']
setInterval(()=>{
    console.log(c[i])
    i=i+1;
    if(i==3)
    {
        i=0
    }
    document.getElementById('s').innerHTML=c[i]
    if(c[i]=='green')
    {
        document.getElementById('p').innerHTML='you can go'
    }
    if(c[i]=='yellow')
    {
        document.getElementById('p').innerHTML='be ready to go'
    }
    if(c[i]=='red')
    {
        document.getElementById('p').innerHTML='please stop'
    }
},4000)