

function store() {
    let formData = new FormData(document.querySelector('form'))
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
    personInfo.forEach(personData => {
        let td = document.getElementById(`${personData.time}_${personData.day}`)

        td.innerHTML = '<button  id = button_delete  class="cl-btn-7"></button>';
        td.prepend(personData.event_name)


        let time_box = document.getElementById('button_delete ')
        time_box.remove()
        time_box.forEach(block=> block.addEventListener('click',removeBlock))
        // function  removeBlock(){
        //     let block = this;
        //     block.style.opacity = 1;
        //     let blockId =setInterval(function (){
        //         if(block.style.opacity > 0) block.style.opacity -= .1;
        //         else {
        //             clearInterval(blockId)
        //             block.remote()
        //         }
        //     },60)
        // }



    })



}

