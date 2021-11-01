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