var srcArr=["https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRDuXjt6IopDRCpT58eXExuomNg3V93mrEWhLhcSs6TBVV0YI00NA","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWcT171jLyastZCG5XA9uGPQuSJepXL_yQF3211CSrCk8eRotJ8YENSQ","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTERfP-AVOC4WPMnQMNsH88DJqXVX-woVJ0lqb4POp1LcZNykjlKQ6uJg","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS7Vu9Be95FBse2kOWduh1AYyzspOSfNg1v4XEllPo50awLwssTWjV-yQ","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTVQSQs8Nvh8fgljnZBr1EUl7kSZYUayWGL0_as6bhSkNllmTiTdFE0mg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTq4zxFEegfI3aDD5zuDa8aywhndMcH132vGM-QrO2gOBRfVpiTkW_KA","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ4A18nhOOPaD1vuzeSfdnA14kIYQgb04Ohgpn25fqgC6D6zpqUj51Hng","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRQ_RATtv_3uuocIUfcVI_0jWQax81lHJEvHb4oRJhUfgWtSQsWFQ",
"https://sp.yimg.com/ib/th?id=HN.608052208640396445&pid=15.1&H=120&W=160&P=0"];
srcArr.sort(function(a,b){
var rand=Math.random();
var bool=rand<0.5?true:false;
console.log(bool);
return bool;
});

$(function() {
var index=0;
$('.select').hide();
var nosLeftArr=[1,2,3,4,5,6,7,8,9];
function fillTestImage(){

 i = Math.floor(Math.random() * nosLeftArr.length);
 indexTest=nosLeftArr.splice(i,1);
 
 console.log(indexTest);
  srcTest=srcArr.slice(indexTest-1, indexTest);
console.log(srcTest);
$('.src-test').attr("src",srcTest);
$('.src-test').css('visibility','visible');
}
function imagePrefetch()
{
	if (index >= srcArr.length)
	{
		setTimeout(function(){
			$('img.grid').css('visibility','hidden');
			if(srcArr.length>0)
			{
				fillTestImage();
				
			}
			$('.select').show();
		},2000);
        return false;
	}
	var img =new Image();
	var url=srcArr[index];
	
	img.onload=function(){
	index++;
	$('img[data-index='+index+']').attr('src',this.src);
	imagePrefetch();
	};
	img.src=url;
	
}
function imgTemplate(src,index){
var template='<div class="img-container"><img class="grid" src="'+"http://sierrafire.cr.usgs.gov/images/loading.gif"+'" data-index="'+index+'"/><div class="label">'+index+'</div><div class="fold"></div></div>';
return template;
}	

for(var i=0;i<=srcArr.length-1;i++)
{
$('.container').append($(imgTemplate(srcArr[i],i+1)));

}
imagePrefetch();
var srcTest="";
var correctCount=0;
$(".selected-img").bind("input",function(){
if(parseInt($(this).val())==indexTest)
{
alert('correct');
correctCount++;
$('img[data-index='+$(this).val()+']').css('visibility','visible');
$(this).val("");
if(correctCount==9)
{
alert('Restart Game');
window.location.href=window.location.href;
}
else
{

fillTestImage();
}
}
else
{
alert("incorrect");
window.location.href=window.location.href;
}


})
					

});





