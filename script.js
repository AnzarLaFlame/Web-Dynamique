var form = document.getElementById("quiz-form");
const paras = document.querySelectorAll('.question-item')
var cong = document.getElementById("alert");
form.addEventListener(
    "submit",
    function (cases){
        let table=[]
        var questions = new FormData(form);
        console.log(questions)
        for ( const element of questions){
            if(element[1]=="true"){
                if(element [0]=="answer-1"){paras[0].style.color = 'green'};
                if(element [0]=="answer-2"){paras[1].style.color = 'green'};
                if(element [0]=="answer-3"){paras[2].style.color = 'green'};}
            else if (element[1]=="false"){
                if(element [0]=="answer-1"){paras[0].style.color = 'red'};
                if(element [0]=="answer-2"){paras[1].style.color = 'red'};
                if(element [0]=="answer-3"){paras[2].style.color = 'red'};}
                table.push(element);    
            
        }
        console.log(table)

        cases.preventDefault();
        let test = table.every((a)=>a[1]=="true");
        if(test){cong.style.display = "block";
        cong.style.color = "green"
    }
        else{cong.style.display= "none"}
    },
    false,
);