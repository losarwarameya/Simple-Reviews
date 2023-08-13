const reviews=[
    {
        image:"https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg",
        name:"Naruto Uzumaki",
        job:"Data Analyst",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla par",
    },
    {
        image:"https://th.bing.com/th/id/OIP.QjynegEfQVPq5kIEuX9fWQHaFj?pid=ImgDet&rs=1",
        name:"Monkey D Luffy",
        job:"Designer",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla par",
    },
    {
        image:"https://th.bing.com/th/id/OIP.VMMEWpgpPYog1oDAEiabwwHaEK?pid=ImgDet&rs=1",
        name:"Asta",
        job:"Web Developer",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla par",
    }
];
const img=document.querySelector(".image");
const author=document.querySelector(".name");
const job=document.querySelector(".job");
const info=document.querySelector(".description");

const leftBtn=document.querySelector(".left-btn");
const rightBtn=document.querySelector(".right-btn");
const randomBtn=document.querySelector(".random-btn");

let currentItem=0;

function showPerson(person) {
    const item=reviews[person];
    img.src=item.image;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.description;
}
showPerson(currentItem);

leftBtn.addEventListener("click",()=>{
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1;
    }
    showPerson(currentItem);
});

rightBtn.addEventListener("click",()=>{
    currentItem++;
    if(currentItem>=reviews.length){
        currentItem=0;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});


