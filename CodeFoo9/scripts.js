window.content = [];
var time = new Date();
var button = document.querySelectorAll('button');
var aLink = document.querySelectorAll('.aLink');
const allDiv = document.querySelector('.wrapper');
var filter ='';

//listener to change highlight of page nav at bottom
for (var i = 0; i < aLink.length; i++) {
	aLink[i].addEventListener("click",function(){
 		if(!this.classList.contains("active")){
			
			for (var i = 0; i < aLink.length; i++) {
				aLink[i].classList.remove("active");
			
			}
			this.classList.add("active");
		}
	});
}

//clears page content then refills it
function resetPage(){
	document.getElementById('root').remove();
	const divRoot =document.createElement('div');
	divRoot.setAttribute('id',"root");
	allDiv.appendChild(divRoot);
	getContent(page * pageSize, pageSize);
}

//navigates to page you select 
function pageSelect(num){
	page = num-1;
	resetPage();
}

//takes you to next page
function pageNext(){
	if(page<15){
		for (var i =  aLink.length - 1; i >= 0; i--) {
			if(aLink[i].classList.contains('active')&& i<aLink.length-1){
				aLink[i+1].classList.add('active');
				aLink[i].classList.remove('active')
			}
		}
		page+=1;
		resetPage();
	}
}

//takes to the page before current
function pageLast(){
	if(page>=1){
		for (var i = 0; i < aLink.length; i++) {
			if(aLink[i].classList.contains('active')&& i>0){
				aLink[i-1].classList.add('active');
				aLink[i].classList.remove('active')
			}
		}
		if(page>=1){
			page-=1;
		}
		resetPage();
	}
}

//adds listener for each button and changes highlight
for (var i = 0; i < button.length; i++) {
	button[i].addEventListener("click",function(){

		//sets filter to match content type of button
		filter=this.getAttribute("data-filter");

		if(!this.classList.contains("selected")){
			
			for (var i = 0; i < button.length; i++) {
				button[i].classList.remove("selected");
			}
			this.classList.add("selected");
		}
		resetPage();
	});
}

//gets specified path for the api and creates script tag for it.
function getEndpoint(path) {
	var script = document.createElement('script');

	script.type = "text/javascript";
	script.src = "https://ign-apis.herokuapp.com" + path;

	document.body.appendChild(script);
}

//processes data 
function processContent(data) {
	window.content = data.data;

	var contentIds = data.data.reduce(function(list, content) { return list.concat([content.contentId]); }, []);

	getEndpoint('/comments?ids=' + contentIds.join(',') + '&callback=processComments');
}

//processes comments from rest of data
function processComments(data) {
	
	
	window.content = window.content.map(function(item) {
	
	if (data.content.some(function(commentCount) { return commentCount.id == item.contentId; })){
		item.commentCount = data.content.find(function(commentCount) { return commentCount.id == item.contentId; }).count;
	}

	else{
		item.commentCount=0;
	}

		return item;
	});

	renderContent(window.content);

}

//takes pages and puts them in path to get start point and number of files from api
function getContent(startIndex, count) {
	getEndpoint('/content?startIndex=' + startIndex + '&count=' + count + '&callback=processContent');
}

//
function renderContent(content) {

	var filteredContent = content.filter(function(item) {
		if (filter == "") return true;
		return item.contentType == filter;
	});




	const app = document.getElementById('root');
	
	const container = document.createElement("div");
	container.setAttribute("class", "container");
	app.appendChild(container);

for (var i = 0; i < filteredContent.length; i++) {




	const item_div =document.createElement('div');
	item_div.setAttribute('class',"item_div");


	const imgDiv =document.createElement("div");
	imgDiv.setAttribute("class", "imgDiv");

	const imgLink =document.createElement('a');
	imgLink.setAttribute('target',"_blank");

	const img = document.createElement("img");
	if(filteredContent[i].thumbnails[0]){
		img.src = filteredContent[i].thumbnails[0].url;
	}
	else{
		img.src = "missing.png";
		img.setAttribute("class","not-found");
	}
	
	
	const duration = document.createElement('span');
	const icon = document.createElement('i');
	//does not fix over hour long vids
	if (filteredContent[i].metadata.duration){
		
		duration.setAttribute('class','duration');
		icon.setAttribute('class', 'fas fa-play-circle');
		
		if (filteredContent[i].metadata.duration<60){
			
		var vidTime =filteredContent[i].metadata.duration;

		var txt = document.createTextNode("    "+"00:"+vidTime);
		
		}
		else {
			if(filteredContent[i].metadata.duration/60>60){
				
				var vidHour = Math.floor(filteredContent[i].metadata.duration/60/60);
			
				if((filteredContent[i].metadata.duration%60)<=9){
					var vidTime ="0" + vidHour + ":" + Math.floor((filteredContent[i].metadata.duration/60)%60)+":0"+filteredContent[i].metadata.duration%60;
				}
				else{
					var vidTime = "0" + vidHour+":" + Math.floor((filteredContent[i].metadata.duration/60)%60)+":"+filteredContent[i].metadata.duration%60;
					if(Math.floor((filteredContent[i].metadata.duration/60)%60)<=9){
						var vidTime = "0" + vidHour+":0" + Math.floor((filteredContent[i].metadata.duration/60)%60)+":"+filteredContent[i].metadata.duration%60;
					}
				}
			}
			else{
				if((filteredContent[i].metadata.duration%60)<=9){
					var vidTime = Math.floor((filteredContent[i].metadata.duration/60))+":0"+filteredContent[i].metadata.duration%60;
				}
				else{
					var vidTime = Math.floor(filteredContent[i].metadata.duration/60)+":"+filteredContent[i].metadata.duration%60;
				}
			}
			
			if((filteredContent[i].metadata.duration/60)<=9){
				var txt = document.createTextNode("    "+"0"+vidTime);
			}
			else{
				var txt = document.createTextNode("    "+vidTime);
			}
		}	
	}		

			
		
	
	else{
		var vidTime ="";
		
		
		var txt ="";
	}

	//"<i class="fas fa-play-circle"></i>"
	
	const titleDiv = document.createElement('div');
	titleDiv.setAttribute('class','titleDiv');

	const item_nav = document.createElement('div');
	item_nav.setAttribute('class','item_nav');

	//<i class="far fa-comment"></i>


	const p = document.createElement('p');
	var apiTime = filteredContent[i].metadata.publishDate;
	var postTime = new Date(apiTime);

	var milliSecs = time - postTime;


	var yearSince = Math.floor( milliSecs / (1000*60*60*24*365));
	var monthSince = Math.floor(milliSecs / (1000*60*60*24*30.5));
	var daySince = Math.floor(milliSecs / (1000*60*60*24));
	var hourSince = Math.floor(milliSecs / (1000*60*60));
	var minuteSince = Math.floor(milliSecs / (1000*60));
	var secondSince = Math.floor(milliSecs /1000);
	var timeAgo;
	
	if (yearSince>0){
		timeAgo = yearSince + "y";
	}
	else if(monthSince>0){
		timeAgo = monthSince + "mth";
	}
	else if(daySince>0){
		timeAgo = daySince+ "d";
	}
	else if(hourSince>0){
		timeAgo = hourSince  +"h";
	}
	else if (minuteSince>0){
		timeAgo = minuteSince +"m";
	}
	else if(secondSince){
		timeAgo = secondSince +'s';
	}
	p.textContent = timeAgo;
//<i class="fas fa-circle"></i>
	const iDot = document.createElement('i');
	iDot.setAttribute('class',"fas fa-circle");
	const iComment = document.createElement('i');
	iComment.setAttribute('class',"far fa-comment");
	const comP = document.createElement('p');

	if(filteredContent[i].commentCount>0){
		comP.textContent = filteredContent[i].commentCount;
	}
	else{
		comP.textContent ='';
	}

	const item_title = document.createElement('div');
	item_title.setAttribute('class',"item_title");


	const a = document.createElement('a');
	a.setAttribute('target',"_blank");

	if(filteredContent[i].metadata.headline){
		var title = filteredContent[i].metadata.headline;
	}	
	else if(filteredContent[i].metadata.title){
		var title = filteredContent[i].metadata.title;
	}
	else{
		var title = "Missing title";
	}

	a.textContent = title;

	var fixedLink =title.replace(/\-/g, " ");
	fixedLink = fixedLink.replace(/\_/g, " ");
	fixedLink = fixedLink.replace(/\s\s+/g ," ");
	fixedLink=fixedLink.replace(/[^a-z|A-Z|0-9|\s]/g ,"").toLowerCase();

//multiple space with single space
	fixedLink = fixedLink.replace(/\s\s+/g ," ");
	fixedLink = fixedLink.replace(/\s/g ,"-");
	fixedLink = fixedLink.replace("-ign-news","");

	
	var day = apiTime.slice(8,10);
	var year = apiTime.slice(0,4);
	var month = apiTime.slice(5,7);
 	var ignLink = "https://www.ign.com/"+filteredContent[i].contentType+"s/"+year+"/"+month+"/"+day+"/"+fixedLink;
	var search = ignLink;

	a.setAttribute('href',search);
	imgLink.setAttribute("href", search);
	const hr = document.createElement('hr');
		

	container.appendChild(item_div);
	item_div.appendChild(imgDiv);
	imgDiv.appendChild(imgLink);
	imgLink.appendChild(img);
	
	if (duration.classList.contains('duration')){
		imgDiv.appendChild(duration);
	}
		duration.appendChild(icon);
	
	if (txt){
		duration.appendChild(txt);
	}
	item_div.appendChild(titleDiv);
	titleDiv.appendChild(item_nav);
	item_nav.appendChild(p);
	item_nav.appendChild(iDot);
	item_nav.appendChild(iComment);
	item_nav.appendChild(comP);
	titleDiv.appendChild(item_title);
	item_title.appendChild(a);
	container.appendChild(hr);
}
	createPages(page);

}

function removePages(){
	document.querySelector(".pagination").remove();
	const pageCreater = document.createElement('div');
	pageCreater.setAttribute('class','pagination');
	const all = document.querySelector(".all");
	all.appendChild(pageCreater);
}
function startPage(){
	if(page!=0){
		page = 0;
		resetPage();
	}
}
function endPage(){
	if(page!=15){
		page = 15;
		resetPage();
	}
}
function createPages(currentPage){
	removePages();
	var pagination = document.querySelector(".pagination");
	const startPage = document.createElement('a');
	startPage.setAttribute('class',"startPage");
	startPage.setAttribute('href','javascript:startPage()');
	startPage.textContent = '<<';
	pagination.appendChild(startPage);
	const lastPage = document.createElement('a');
	lastPage.setAttribute('class',"aLink");
	lastPage.setAttribute('href','javascript:pageLast()');
	lastPage.textContent = 'Previous';
	pagination.appendChild(lastPage);
	if (currentPage>1&&currentPage<=13){
		for (var i = 0; i < 5 ; i++) {
			const aPage = document.createElement('a');
			aPage.setAttribute('class',"aLink");
			if(i==0){
				aPage.setAttribute('href','javascript:pageSelect('+(currentPage-1)+')');
				aPage.textContent = currentPage-1;
			}
			else if(i==1){
				aPage.setAttribute('href','javascript:pageSelect('+(currentPage)+')');
				aPage.textContent = currentPage;
			}
			else if(i==2){
				aPage.setAttribute('href','javascript:pageSelect('+(currentPage+1)+')');
				aPage.setAttribute("class",'active');
				aPage.textContent = currentPage+1;
			}
			else {
				aPage.setAttribute('href','javascript:pageSelect('+(currentPage+i-1)+')');;
				aPage.textContent = currentPage+i-1;
			}
			pagination.appendChild(aPage);
		}
	}
	

	else if (currentPage==1){

		for (var i = 0; i < 5 ; i++) {
			const aPage = document.createElement('a');
			aPage.setAttribute('class',"aLink");
			if(i==0){
				aPage.setAttribute('href','javascript:pageSelect('+(currentPage)+')');
				aPage.textContent = currentPage;
			}
			else if(i==1){
				aPage.setAttribute('href','javascript:pageSelect('+(currentPage+1)+')');
				aPage.setAttribute("class",'active');
				aPage.textContent = currentPage+1;
			}
			
			else {
				aPage.setAttribute('href','javascript:pageSelect('+(currentPage+i)+')');
				aPage.textContent = currentPage+i;
			}
			pagination.appendChild(aPage);
		}
	}
	else if (currentPage==0){

		for (var i = 0; i < 5 ; i++) {
			const aPage = document.createElement('a');
			aPage.setAttribute('class',"aLink");
			
				aPage.setAttribute('href','javascript:pageSelect('+(currentPage+1+i)+')');
				aPage.textContent = currentPage+1+i;
				if(i==0) aPage.setAttribute("class",'active');
			
			pagination.appendChild(aPage);
		}
	}

	else if (currentPage==14){
	
		for (var i = 0; i < 5 ; i++) {
			const aPage = document.createElement('a');
			aPage.setAttribute('class',"aLink");
			if(i==0){
				aPage.setAttribute('href','javascript:pageSelect('+(currentPage-2)+')');
				aPage.textContent = currentPage-2;
			}
			else if(i==1){
				aPage.setAttribute('href','javascript:pageSelect('+(currentPage-1)+')');
				aPage.textContent = currentPage-1;
			}
			else if(i==2){
				aPage.setAttribute('href','javascript:pageSelect('+(currentPage)+')');
				
				aPage.textContent = currentPage;
			}
			else {
				aPage.setAttribute('href','javascript:pageSelect('+(currentPage+i-2)+')');
				aPage.textContent = currentPage+i-2;
			}
			if(i==3){
				aPage.setAttribute("class",'active');
			}
				
			pagination.appendChild(aPage);
			
		}
	}
		else  {
	
		for (var i = 0; i < 5 ; i++) {
			const aPage = document.createElement('a');
			aPage.setAttribute('class',"aLink");
			if(i==0){
				aPage.setAttribute('href','javascript:pageSelect('+(currentPage-1)+')');
				aPage.textContent = currentPage-2;
			}
			else if(i==1){
				aPage.setAttribute('href','javascript:pageSelect('+(currentPage)+')');
				aPage.textContent = currentPage-1;
			}
			else if(i==2){
				aPage.setAttribute('href','javascript:pageSelect('+(currentPage+1)+')');
				
				aPage.textContent = currentPage;
			}
			else {
				aPage.setAttribute('href','javascript:pageSelect('+(currentPage+i-3)+')');
				aPage.textContent = currentPage+i-3;
			}
			if(i==4){
				aPage.setAttribute("class",'active');
			}
				
			pagination.appendChild(aPage);
			
		}
	}

	const nextPage = document.createElement('a');
	nextPage.setAttribute('class',"aLink");
	nextPage.setAttribute('href','javascript:pageNext()');
	nextPage.textContent = 'Next';
	pagination.appendChild(nextPage);
	const endPage = document.createElement('a');
	endPage.setAttribute('class',"endPage");
	endPage.setAttribute('href','javascript:endPage()');
	endPage.textContent = '>>';
	pagination.appendChild(endPage);

}




var page = 0,
	pageSize = 20;

getContent(page * pageSize, pageSize);
