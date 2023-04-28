console.log("console Running");
document.querySelector('.cross').style.display='none';
document.querySelector('.hamberger').addEventListener("click", ()=>{
    document.querySelector(".sidebar").classList.toggle('sidebarGo');
    if(document.querySelector(".sidebar").classList.contains('sidebarGo')){
        document.querySelector('.cross').style.display='none';
        setTimeout(() => {
            document.querySelector('.ham').style.display="inline";
        }, 300);
    }
    else{
            
            document.querySelector('.ham').style.display='none';
            setTimeout(() => {
                document.querySelector('.cross').style.display="inline";
            }, 300);
    }
})