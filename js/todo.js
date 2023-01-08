const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoLIst = document.querySelector("#todo-list");
const showToDoButton = document.querySelector(".show-todolist");
const toDoContainer = document.querySelector(".todo-container");

const HIDDEN= "hidden"; // const HIDDEN_CLASSNAME = "hidden"; 은 다시쓰면 안된다. 에러가 남. 'HIDDEN_CLASSNAME' has already been declared

let toDos = []; // array로 만들어서 저장하면 todos라는 이름으로 작성된 모든 input인 newTodo들을 하나로 묶어 저장할 수 있게 됨. toDos는 업데이트 되는 변수이기에 let
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)) //"todos"라는 이름으로 toDos의 array를 local storage에 저장. 이때 stringify를 통해 toDos의 array를 모두 string화 해줌.이러면 array 형태로 저장 가능하고 중복도 가능함. 
}

function deleteToDo(event){
    const li = event.target.parentNode; //event의 target이 된 element(button)의 부모 element인 바로 그...! botton 옆의 li를 지우는 것!
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //toDo는 toDos라는 array에 있는 아이템들. 이 아이템들의 아이디(toDo.id)가 li.id와 !==다르다면 true... 같다면 false를 return해서 아이템들 중 li.id와 아이디가 같은 아이템을 새 array에서 없앨 수 있다. 또, toDo의 아이디는 number이지만 li의 아이디는 String이라서 parsInst를 이용해준다.
    saveToDos();   // filter를 이용해 아이템을 제거하고 새로운 array를 만든 것이기 때문에 한번 더 localStorage에 저장해주어야 함. 
}
function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id; //newtodo가 입력된 시간의 ms를 id로 치환하여 저장함, input의 아이디와 li의 id를 똑같이 만들어줌. 
    const span = document.createElement("span");
    span.innerText = newToDo.text; // span내의 text는 newTodo의 input vlaue 가 됨. 아래의 paintToDo(newToDoObj);에서 object를 데이터로 받기 때문에 "오브젝트 안의 텍스트"를 원한다는 의미로 newToDo.text라고 해줘야함
    const button = document.createElement("button");
    button.innerText = "delete"
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoLIst.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    const newToDoObj ={ // newTodo는 그냥 string일 뿐이라서 newToDoobj을 통해 오브젝트화 해줌.
        text:newTodo,
        id: Date.now(), //newtodo가 입력된 시간의 ms를 id로 치환하여 저장함
    }
    toDos.push(newToDoObj); // newTodo(input의 value)를 const toDos의 array에 push(넣음)해줌. / 그리고 obj화 된 newToDo를 argument로 주어서 이 시점에서는 string 대신 object를 데이터로 받음 
    paintToDo(newToDoObj); //newTodo(input의 value)를 paintToDo의 argument로 넣어서 함수를 호출한 것임.
    saveToDos(); // submit되는 순간 saveToDos라는 함수로 localstorage를 저장함.
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); //이때는 stringify로 인해 그저 string으로만 저장되어있음
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); // 만약 savedToDos가 있다면 string으로만 저장되어있던 savedToDos를 js가 이해할 수 있는 코드로 바꿈. 이렇게 되면 array로써 각각의 item에 대해서 function을 실행할 수 있게 되는 것임!
    toDos = parsedToDos // toDos가 빈 array로 시작했기에 toDos를 submit할 때마다 새로운 toDos를 array에 push했고 savedToDos 함수에서 새 toDos를 저장해왔다. 그렇기에 새 toDos는 저장되지만 예전의 toDos는 날아가는 현상이 생겼는데, 이 시점의 toDos는 parsedtoDos가 되면서 더이상 빈 array가 아닌 이전 모든 element들을 가진 array를 저장하게 된다.
    parsedToDos.forEach(paintToDo); // ()안의 funciton이 parsedToDos가 각기 생길 때마다 일어남.
}



function paintToDO(){
    toDoContainer.classList.remove(HIDDEN);
}

function handleShowToDoButton(){
    paintToDO();
    showToDoButton.addEventListener("click",handleShowToDoButton2);
}
showToDoButton.addEventListener("click", handleShowToDoButton);