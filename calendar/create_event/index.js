

function store() {
    history.pushState(null, null, 'http:/calendar/')
    history.go(0)

    let formData = new FormData(document.querySelector('form'))
    console.log(formData,'formData')
    let object = {};

    let memberName = ''

    formData.forEach((value, key) => {

        if (key === 'member_name') {
            memberName = value
        }
        object[key] = value;
    });

    let itemsArray = []
    itemsArray.push(object)
    localStorage.setItem(memberName, JSON.stringify(itemsArray))
}


function showTasks() {
    let name = document.querySelector('#choose_members').value
    let personInfo = JSON.parse(localStorage.getItem(name))
    console.log(personInfo,'personInfo')
    if(personInfo && personInfo.length) {
        personInfo.forEach(personData => {
            let td = document.getElementById(`${personData.time}_${personData.day}`)
            let div = document.createElement('div')
            td.prepend(div)

            div.innerHTML = '<button  id = "button_delete"  type="reset" class="cl-btn-7"></button>';
            div.prepend(personData.event_text)



            document.getElementById("button_delete").onclick = function () {


                button_delete.innerHTML = '<div id="my_modal" class="modal"></div>'
                let my_modal = document.querySelector('#my_modal')
                my_modal.innerHTML = '<div class="modal_content" id="modal_content"></div>'
                let modal_content = document.querySelector('#modal_content')
                modal_content.innerHTML = `<p class="text_modal">Are you sure you want to delete  ${personData.event_text} event?</p>`

                modal_content.insertAdjacentHTML("afterbegin", '<span class="close_modal_window">X</span>')

                modal_content.insertAdjacentHTML("beforeend", '<button type="button"  id = "button_no"  class="button_no"  aria-label="close" >NO</button>')


                modal_content.insertAdjacentHTML("beforeend", '<button  id = "button_yes"  class="button_yes">YES</button>')


                let modal = document.getElementById("my_modal");
                let button_no = document.getElementById('button_no')
                let button_yes = document.getElementById('button_yes')
                let span = document.getElementsByClassName("close_modal_window")[0];


                button_delete.onclick = function () {
                 modal.classList.add('modal_vis'); // добавляем видимость окна

                }
                span.onclick = function () {
                    modal.style.display = "none";
                    console.log(span,'span')
                }

                button_no.onclick = function () {
                    modal.style.display = "none";

                }
                button_yes.onclick = function () {
                    div.remove()
                }


                window.onclick = function (event) {
                    if (event.target === modal) {
                        modal.style.display = "none";
                    }
                }
            }

        })
    }
}

