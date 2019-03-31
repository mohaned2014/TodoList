document.addEventListener('DOMContentLoaded',() =>{
    function NewBookHTML(BookName) {
        let s = '<li><span class="delete">delete</span><span class="name">'+BookName+'</span></li>';
        return s;
    }
    
    //add task
    addTask=document.forms["add-task"];
    addTask.addEventListener('submit',(e) =>{
        e.preventDefault();
        const value = addTask.querySelector("input").value;
        document.querySelector("#task-list ul").innerHTML += NewBookHTML(value);
    })
    
    
    const taskList = document.querySelector("#task-list ul");
    
    taskList.addEventListener('click',(e) =>{
        //delete any time
        if(e.target.className=='delete'){
            const task_To_Delete = e.target.parentElement;
            task_To_Delete.parentElement.removeChild(task_To_Delete);
        }
        else{
            let task = "";
            if(e.target.tagName=='LI') task = e.target.querySelector(".name");
            else if(e.target.tagName=='S') task=e.target.parentElement;
            else if(e.target.tagName=='I')task=e.target.parentElement;
            else if(e.target.tagName=='SPAN')task=e.target;
            let currentString = task.innerHTML;
            let endString = "";
            if(currentString[0]==='<'){
                for(let j = 3 ; j<currentString.length&&currentString[j]!=='<';j++){
                    endString+=currentString[j];
                }
            }
            else{
                endString = "<s>"+currentString+"   </s>"+'<i class="material-icons .md-48">done_all</i>';
            }
            task.innerHTML=endString; 
     
        }
    })
    
    
    //search
    const searchText = document.querySelector("#search-List input");
    
    
    searchText.addEventListener("keyup",(e) =>{
        const textToSearchFor = e.target.value.toLowerCase();
        const tasks = taskList.querySelectorAll("li .name");
    
        for (let i = 0; i < tasks.length; i++) {
            const element = tasks[i].textContent.toLowerCase();
            if(element.indexOf(textToSearchFor) == -1){
                tasks[i].parentElement.style.display = 'none';
            }else{
                tasks[i].parentElement.style.display='block';
            }
        }
    })
})