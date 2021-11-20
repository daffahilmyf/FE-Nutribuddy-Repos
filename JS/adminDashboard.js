$(document).ready(()=>{
    $.get("https://nutribuddy-staging.herokuapp.com/api/v1/users", (data)=>{
        if(data){
            const userCollection = data['data']
            $("#user-card").empty()
            userCollection.forEach(element => {
                $("#user-card").append(
                `<div class="col-sm-4">
                    <div onclick="cardOption()" id="card-data-box">
                        <div class="header">
                            <ul>
                                <li><img src="img/dashboardHome/profile.png" width="60"></li>
                                <li>
                                    <h5>${element.firstname +' '+ element.lastname}</h5>
                                    <h6>${element.email}</h6>
                                </li>
                            </ul>
                        </div>

                        <div class="content">
                            <div class="row">
                                <div class="col-sm-12">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet,
                                    </p>
                                </div>
                                <div class="col-sm-6">
                                    <h6>No hp</h6>
                                    <h5>${element.phone_number}</h5>
                                </div>
                                <div class="col-sm-6">
                                    <h6>Id User</h5>
                                    <h5>${element._id}</h6>
                                </div>
                                <div class="col-sm-6">
                                    <h6>Username</h6>
                                    <h5>Ahmad Dhani</h5>
                                </div>
                                <div class="col-sm-6">
                                    <h6>Verified</h5>
                                    <h5>${element.isVerified}</h6>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div id="option-card">
                        <ul>
                            <li>
                                <svg width="30" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.9569 70.21L72.4937 16.6687C74.6088 14.6447 77.4323 13.5293 80.3596 13.5613C83.287 13.5933 86.0854 14.7701 88.1558 16.8399C90.2261 18.9097 91.4038 21.7078 91.4366 24.6351C91.4694 27.5624 90.3547 30.3862 88.3313 32.5019L34.7856 86.0431C33.5641 87.2647 32.0084 88.0974 30.3144 88.4362L13.125 91.875L16.5638 74.6812C16.9026 72.9873 17.7353 71.4315 18.9569 70.21V70.21Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M63.4375 28.4375L76.5625 41.5625" stroke="white" stroke-width="5"/>
                                </svg>
                            </li>
                            <li>
                                <svg width="30" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5 26.25H87.5L80.5875 88.4625C80.3506 90.6035 79.3322 92.5819 77.7274 94.0188C76.1225 95.4557 74.0441 96.2501 71.89 96.25H33.11C30.9559 96.2501 28.8775 95.4557 27.2726 94.0188C25.6678 92.5819 24.6494 90.6035 24.4125 88.4625L17.5 26.25Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M32.1344 13.7681C32.842 12.2674 33.9618 10.9987 35.3631 10.1102C36.7645 9.22173 38.3895 8.74998 40.0488 8.75H64.9512C66.6112 8.74915 68.2372 9.22051 69.6394 10.1091C71.0415 10.9976 72.162 12.2667 72.87 13.7681L78.75 26.25H26.25L32.1344 13.7681Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.75 26.25H96.25" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M43.75 48.125V70" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M61.25 48.125V70" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>    
                            </li>
                        </ul>
                    </div>
                </div>`
                )
            });
        }
    })

    $("card-data-box").click(()=>{
        cardOption()
    })
})


function cardOption(){
    collapseComponent = document.getElementById("option-card");
    collapseComponent.classList.toggle('active');
}


// function getPageList(totalPages, page, maxLength){
//     function range(start, end){
//       return Array.from(Array(end - start + 1), (_, i) => i + start);
//     }
  
//     var sideWidth = maxLength < 9 ? 1 : 2;
//     var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
//     var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  
//     if(totalPages <= maxLength){
//       return range(1, totalPages);
//     }
  
//     if(page <= maxLength - sideWidth - 1 - rightWidth){
//       return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
//     }
  
//     if(page >= totalPages - sideWidth - 1 - rightWidth){
//       return range(1, sideWidth).concat(0, range(totalPages- sideWidth - 1 - rightWidth - leftWidth, totalPages));
//     }
  
//     return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
//   }
  
//   $(function(){
//     var numberOfItems = $("#user-card .col-sm-4").length;
//     var limitPerPage = 3; //How many card items visible per a page
//     var totalPages = Math.ceil(numberOfItems / limitPerPage);
//     var paginationSize = 7; //How many page elements visible in the pagination
//     var currentPage;
  
//     function showPage(whichPage){
//       if(whichPage < 1 || whichPage > totalPages) return false;
  
//       currentPage = whichPage;
  
//       $("#user-card .col-sm-4").hide().slice(3,6).show();
  
//       $("#pagination li").slice(1, -1).remove();
  
//       $(".prev-button").toggleClass("disable", currentPage === 1);
//       $(".next-button").toggleClass("disable", currentPage === totalPages);
//       return true;
//     }
  
//     $(".pagination").append(
//       $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Prev")),
//       $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Next"))
//     );
  
//     $(".card-content").show();
//     showPage(1);
  
//     $(document).on("click", ".pagination li.current-page:not(.active)", function(){
//       return showPage(+$(this).text());
//     });
  
//     $(".next-page").on("click", function(){
//       return showPage(currentPage + 1);
//     });
  
//     $(".previous-page").on("click", function(){
//       return showPage(currentPage - 1);
//     });
//   });

const ulTag = document.getElementById("pagination").querySelector("ul");
const numberOfItems = document.getElementById("user-card").getElementsByClassName("col-sm-4").length;
const numberPerPage = 3;
let totalPages = Math.ceil(numberOfItems/numberPerPage);
let page = 1;
ulTag.innerHTML = createPagination(totalPages, page);
var akhir,tampung;


function createPagination(totalPages, page){
    let liTag = '';
    let active;
    let beforePage = page - 1;
    let afterPage = page + 1;


    liTag += `<li class="prev-button" onclick="createPagination(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i></span></li>`;
  
    if(page > 2){ 
      liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)">1</li>`;
      if(page > 3){ 
        liTag += `<li class="dot">..</li>`;
      }
    }
  
    for (var plength = beforePage; plength <= afterPage; plength++) {
      if (plength > totalPages) { 
        continue;
      }
      if (plength == 0) { 
        plength = plength + 1;
      }
      if(page == plength){
        active = "active";
      }else{ 
        active = "";
      }
      liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
    }
  
    if(page < totalPages - 1){ 
      if(page < totalPages - 2){ 
        liTag += `<li class="dot">..</li>`;
      }
      liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
    }
  
      liTag += `<li class="next-button" onclick="createPagination(totalPages, ${page + 1})"><span> <i class="fas fa-angle-right"></i></span></li>`;
    $("#user-card .col-sm-4").hide().slice((page - 1) * numberPerPage, page * numberPerPage).show();
    ulTag.innerHTML = liTag; 
    return liTag;
}

// $(function(){
//     var numberOfItems = $("#user-card .col-sm-4").length;
//     var limitPerPage = 3; //How many card items visible per a page
//     var totalPages = Math.ceil(numberOfItems / limitPerPage);
//     var paginationSize = 7; //How many page elements visible in the pagination
//     var currentPage;
  
//     function showPage(whichPage){
//       if(whichPage < 1 || whichPage > totalPages) return false;
  
//       currentPage = whichPage;
  
//       $("#user-card .col-sm-4").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
  
//       $(".pagination li").slice(1, -1).remove();
  
//       getPageList(totalPages, currentPage, paginationSize).forEach(item => {
//         $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
//         .toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
//         .attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page");
//       });
  
//       $(".previous-page").toggleClass("disable", currentPage === 1);
//       $(".next-page").toggleClass("disable", currentPage === totalPages);
//       return true;
//     }
  
//     $(".pagination").append(
//       $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Prev")),
//       $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Next"))
//     );
  
//     $(".card-content").show();
//     showPage(1);
  
//     $(document).on("click", ".pagination li.current-page:not(.active)", function(){
//       return showPage(+$(this).text());
//     });
  
//     $(".next-page").on("click", function(){
//       return showPage(currentPage + 1);
//     });
  
//     $(".previous-page").on("click", function(){
//       return showPage(currentPage - 1);
//     });
//   });


/**const listLenght = document.getElementById("user-card").getElementsByClassName("col-sm-4").length;
const numberOfItems = listLenght;
const numberPerPage = 3;
const currentPage = 1;
const numberOfPages = Math.ceil(numberOfItems/numberPerPage);

const trimStart = (currentPage-1)*numberPerPage
const trimEnd = trimStart + numberPerPage

function buildPage(currPage) {
    const trimStart = (currPage-1)*numberPerPage
    const trimEnd = trimStart + numberPerPage
}

for (let i=0; i<numberOfPages; i++) {
    $('#pagination').append(`<li "value="${i+1}">${i+1}</li>`)
}

function pagination(){
    
}**/