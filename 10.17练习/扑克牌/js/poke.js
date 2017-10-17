/*
* @Author: lenovo
* @Date:   2017-10-17 16:53:35
* @Last Modified by:   lenovo
* @Last Modified time: 2017-10-17 20:04:01
*/
$(function(){
	/*产生扑克牌*/
	let color=['c','d','h','s'];
	let poke=[];
	let flag={};
	let index=0;
	for (let i=0;i<52;i++){
		let hua=color[Math.floor(Math.random()*color.length)];
		let num=Math.floor(Math.random()*13+1);
		while(flag[`${hua}_${num}`]){
			hua=color[Math.floor(Math.random()*color.length)];
			num=Math.floor(Math.random()*13+1);
		}
		poke.push({hua,num});
		flag[`${hua}_${num}`]=true;
	}
	// console.log(poke)
	for (let i=0;i<7;i++){
		for (let j=0;j<=i;j++){
			let left=300-50*i+110*j,top=50*i;
			$('<div>').addClass('poke box').css({backgroundImage:`url(img/images/${poke[index].num}${poke[index].hua}.png)`})
			.appendTo('.desk').delay(index*10).animate({left,top,opacity:1})
			index++;
		}
	}

	//剩余的牌
	for (;index<poke.length;index++){
		$('<div>').addClass('poke zuo').css({backgroundImage:`url(img/images/${poke[index].num}${poke[index].hua}.png)`})
	    .appendTo('.desk').delay(index*10).animate({left:0,top:'460px',opacity:1})
	}

	//zuo
	let first=null;
	$('.desk').on('click','.box',function(e){
        let element=e.target;
        $(element).css('box-shadow','0 0 0 3px #0a95da').animate({top:'-=10'})
	}) 
	// if(!first){
	// 	//第一次点击
	// 	first=e.target;
	// }else{
	// 	//第二次点击
	// }
})