// --------Navigation--------


const menu = document.querySelector("#menu");
const head = document.querySelector(".head");
const navgrow = document.querySelector(".nav_grow");
const navshot = document.querySelector(".nav_short");
const backbtn = document.querySelector(".back_arrow");
const dashboard = document.querySelector(".container");
const taskbar = document.querySelector(".taskbar");

menu.addEventListener("click",navigation);
backbtn.addEventListener("click",shrink);

function navigation(){
    if(navgrow.classList.contains("navgrow_anm")){
        navgrow.classList.remove("navgrow_anm");
      
        navgrow.style.display = "none";
    }
    else{
        navgrow.classList.add("navgrow_anm");
        dashboard.classList.add("container_ease_in");
        taskbar.classList.add("container_ease_in");
        navgrow.style.display = "flex";
    }
 
    

}
function shrink(){
    if(navgrow.classList.contains("navgrow_anm")){
        navgrow.classList.remove("navgrow_anm");
        dashboard.classList.remove("container_ease_in");
        taskbar.classList.remove("container_ease_in");
       
    }
    else{
        navgrow.classList.add("navgrow_anm");
        navgrow.style.display = "flex";
    }
   
}

// ---------Dashboard_Controls------


// ----wallet_openerAndclose--------

const exit = document.querySelector("#exit");
const innerWallet = document.querySelector(".container3");
const outerWallet = document.querySelector(".wallet");


        innerWallet.addEventListener("click",()=>{
            outerWallet.classList.add("wallet_open");
            console.log("doned");
        });
        exit.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent click event from bubbling up
    outerWallet.classList.remove("wallet_open");

  
    console.log("done close");
});

// --------fgoals_openerAndcloser--------

const innerFgoals = document.querySelector(".container4");
const outerFgoals = document.querySelector(".fgoals");
const fExit = document.querySelector("#exit_fgoals");

        innerFgoals.addEventListener("click",()=>{
            outerFgoals.classList.add("fgoal_open");
            console.log(outerFgoals);
        });
        fExit.addEventListener("click",(e)=>{
            e.stopPropagation();
            outerFgoals.classList.remove("fgoal_open");
        });


// -------------graph------------------

 const outerGraph = document.querySelector(".container7");
 const innerGraph = document.querySelector(".graphs");
 const gExit = document.querySelector("#exit_graph");

        outerGraph.addEventListener("click",()=>{
           innerGraph.classList.add("graph_open") ;
        });
        gExit.addEventListener("click",(e)=>{
            e.stopPropagation();
            innerGraph.classList.remove("graph_open") ;
        });


// ----------------payables---------------
const outerPay = document.querySelector(".container8");
const innerPay = document.querySelector(".payabls");
const pExit = document.querySelector("#exit_pay");

outerPay.addEventListener("click",()=>{
    innerPay.classList.add("pay_open") ;
 });
 pExit.addEventListener("click",(e)=>{
     e.stopPropagation();
     innerPay.classList.remove("pay_open") ;
 });




  // Automatically generate dates for the entire month
  function generateDates() {
    var dates = [];
    var currentDate = new Date();
    var daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    for (var i = 1; i <= daysInMonth; i++) {
        var dateString = (currentDate.getMonth() + 1) + '/' + i + '/' + currentDate.getFullYear();
        dates.push(dateString);
    }
    return dates;
}

var xValues = generateDates();
var yValues = [25, 49, 44, 24, 50, 24,];
var barColors = Array.from({ length: xValues.length }, () => 'green'); // Array of green color for each bar

new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        legend: { display: false },
        title: { display: false },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});