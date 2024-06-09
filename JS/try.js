// var container = []
// function newQuote() {
//     var randomNum = Math.floor(Math.random() * 5);
//     AddArray(randomNum)
//     console.log(container);
//     CheackNum(container[container.length - 1])

// }

// function CheackNum(Num) {

//     switch (Num) {
//         case 0:
//             document.getElementById("quote").innerHTML = "“Be yourself; everyone else is already taken.”" +
//                 " ― Oscar Wilde"
//             break;
//         case 1:
//             document.getElementById("quote").innerHTML = "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”"
//                 + "  ― Marilyn Monroe"
//             break;
//         case 3:
//             document.getElementById("quote").innerHTML = "“So many books, so little time.”" +
//                 "― Frank Zappa"
//             break;
//         case 4:
//             document.getElementById("quote").innerHTML = "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
//                 + " ― Albert Einstein"
//             break;
//         case 5:
//             document.getElementById("quote").innerHTML = "“A room without books is like a body without a soul.”" +
//                 "― Marcus Tullius Cicero"
//             break;
//         default:
//             console.log(`Sorry, we are out of .`);
//     }

// }
// function AddArray(Num) {
//     if (container.length < 5) {
//         if (container.includes(Num)) {
//             newQuote()
//         }
//         else {
//             container.push(Num)
//         }
//     }
//     else {
//         container.push(Num)

//     }
// }

var bookMark =document.getElementById("BookmarkName");
var bookUrl =document.getElementById("BookmarkUrl");



var allBookMark =[];
var markCheck = /^\w{3}/;
var urlCheck =/^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;

if(JSON.parse(localStorage.getItem("book")) !=null)
    allBookMark=JSON.parse(localStorage.getItem("book"));
display();

function getData()
{
    if(bookMark.classList.contains("is-valid") &&bookUrl.classList.contains("is-valid"))
        {
            console.log(bookMark.value);
            var book ={
                mark:bookMark.value,
                url:bookUrl.value,
            }
            allBookMark.push(book);
            localStorage.setItem("book",JSON.stringify(allBookMark));
            display();
            clear()

        }
        else
        {
            document.getElementById("divShow").classList.replace("d-none","d-flex");

        }
   
}
function display()
{
    var container ="";
    for(var i=0 ;i<allBookMark.length;i++)
        {
            container+= `
            <tr>
            <td>
                ${i+1}
            </td>
            <td>
                ${allBookMark[i].mark}
            </td>
            <td>
            <a href="${allBookMark[i].url}" target="_blank">
            <button class="btn  btn-success ">
                <i class="fa-solid fa-eye pe-2"></i>
                Visit
            </button>
           </a>
            </td>
            
            <td>
                <button class="btn btn-danger " onclick="delelte(${i})">
                    <i class="fa-solid fa-trash-can pe-2"></i>
                    delelte
                </button>
            </td>
          </tr>
            `
        }

        document.getElementById("tbody").innerHTML =container;
}
function delelte(i)
{
    allBookMark.splice(i,1);
    localStorage.setItem("book",JSON.stringify(allBookMark));
    display();


}

function testName()
{
    if(markCheck.test(bookMark.value))
        {
            bookMark.classList.add("is-valid");
            bookMark.classList.remove("is-invalid");  

        }
        else
        {
            bookMark.classList.remove("is-valid");

            bookMark.classList.add("is-invalid");  

        }
}
function testUrl()
{
    if(urlCheck.test(bookUrl.value))
        {
            bookUrl.classList.add("is-valid");
            bookUrl.classList.remove("is-invalid");  

        }
        else
        {
            bookUrl.classList.remove("is-valid");

            bookUrl.classList.add("is-invalid");  

        }
}
document.getElementById("close").addEventListener("click" ,function()
{
    document.getElementById("divShow").classList.replace("d-flex","d-none");
});
function clear() {
        document.getElementById("BookmarkName").value=null,
         document.getElementById("BookmarkUrl").value=null;
   
    
}
