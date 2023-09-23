var x=document.getElementById('sscreen');
var y=document.getElementById('sbtn');
var r=document.getElementById('rbtn');
	var d=document.getElementById('d');
var ul=document.getElementById('ul');
var t=document.getElementById('t');
var c=document.getElementById('c');
var s=document.getElementById('s');
var alert3=document.getElementById('alert3');
var a=['violit','blue','red','yellow','brown','orange',]
var yes=document.getElementById('yes');
var no=document.getElementById('no');
var main=document.getElementById('main');
var dd=document.getElementById('dd');
var ok=document.getElementById('ok');

var i;
var l;

l=0;
s.style.backgroundColor=a[l]
i=0;
var z;
z=i;

t.onclick=function(){var e=prompt('enter your target');
		f=1;			 
	ne=e*1+f-1;				 
}


ul.style.display='none';
y.style.height='100px';y.style.width='100px';y.style.borderRadius='100px';y.style.border='none'
	y.onclick=function(){

		i=i+1;
	x.innerText=i;
		if(i>999){x.style.fontSize='30px'}
y.style.height='100px';y.style.width='100px';y.style.borderRadius='100px';y.style.border='2px solid white'
	setTimeout(function(){	y.style.border='none';},150);
y.style.height='100px';y.style.width='100px';y.style.borderRadius='100px';y.style.border='2px solid white'
	if(i-1==ne-1){window.alert('you achived your target!')}
	
	}

	
	
	var ss;
ss='v';
r.onclick=function(){ alert3.style.display='block';setTimeout(function(){alert3.style.display='none';},4600);
	
					}
yes.onclick=function(){ i=0; alert3.style.display='none';x.innerText=i;}
	no.onclick=function(){alert3.style.display='none';}
us='t';
d.onclick=function(){
	
	if(us=='t'){ul.style.display='block'; us='f'}
	else{ul.style.display='none'; us='t'}
}
c.onclick=function(){l=l+1;s.style.backgroundColor=a[l];c.innerText=a[l];if(l==a.length-1){l=l-5} }
var coco;
coco=true;
dd.onclick=function(){
if(coco==true){main.style.backgroundColor='black'; dd.innerText='lightmode'; coco=false;}
else{main.style.backgroundColor='white'; dd.innerText='darkmode'; coco=true;}}
// Create a new Date object
