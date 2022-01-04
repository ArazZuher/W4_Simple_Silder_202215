//
const body = document.getElementById('body')
const img = document.getElementById('img')

const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')



// this is reson create name img pic-1 , pic-2

/* /// replace this can use other way in the below 
function name(){

}

nextBtn.addEventListener('click',name)
*/
let imgNum = 1 
nextBtn.addEventListener('click',()=>{
	if(imgNum == 5){
		imgNum=1
	}else{
		imgNum+=1
	}

	let nexImg =1 

	if(imgNum == 5){
		nexImg=1

	}else{
		nexImg= imgNum + 1
	}
	
	body.style.backgroundImage = `url("photo/pic-${nexImg}.jpg")`
	img.src=`./photo/pic-${imgNum}.jpg`
})

prevBtn.addEventListener('click',()=>{
	if(imgNum == 1){
		imgNum=5
	}else{
		imgNum-=1
	}

	let nexImg =1 
	if(imgNum == 5){
		nexImg=1
	}else{
		nexImg= imgNum + 1
	}

	body.style.backgroundImage = `url("photo/pic-${nexImg}.jpg")`
	img.src=`./photo/pic-${imgNum}.jpg`
})


