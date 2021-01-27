

function store() {
    let formData = new FormData(document.querySelector('form'))
    console.log(formData, 'form')

    let object = {};

    console.log(object, 'obj')
    formData.forEach(function (value, key) {
        object[key] = value;
    });
    console.log(formData,'formData')
    let itemsArray = []
    itemsArray.push(object)
    console.log((itemsArray,'itemsarray'))
    localStorage.setItem('name', JSON.stringify(itemsArray))
    let data = JSON.parse(localStorage.getItem('name'))
    console.log(data, 'data')



}















































































































































//
// function store() {
//     let form = document.forms.form;
//
//     console.log('formElems', form.elements)
//
//     let eventName = form.elements.event_name.value;
//     let memberName = form.elements.member_name.value;
//     let day = form.elements.day.value;
//     let time = form.elements.time.value;
//
//     console.log(day,'day')
//     console.log(time,'time')
//     console.log(eventName,'event_name')
//     console.log('memberName', memberName)
//
//     let json = JSON.stringify(form);
//     console.log(json,'json')
// }
























// const meetings = [];
//
// const event = {
//     name: 'lalta',
//     time: '123',
//     team: '',
//     occurence: '2w'
//
// }
//
//
// const addMeeting = (data, name) => {
//     meetings.push(data,name)
// }
//
// //
// // document.getElementById() = meetings[0]
//
// function setText(id, text) {
//     let elem = document.getElementById('event_name');
//     elem.innerHTML = text;
// }
// let select_name = document.querySelector('#select_name')
// select_name.addEventListener('change', function () {
//     console.log(this.value)
// })
//
// let select_time = document.querySelector('#select_time')
// select_time.addEventListener('change', function () {
//     console.log(this.value)
// })
//
// let select_days = document.querySelector('#select_days')
// select_days.addEventListener('change', function () {
//     console.log(this.value)
// })


// function store(){
//     let inputText= document.getElementById("event_text"),form = {};
//     let select_name = document.getElementById('select_name');
//     let select_days = document.getElementById('select_days');
//     let select_time = document.getElementById('select_time');
//     localStorage.setItem("event_text", inputText.value);
//     localStorage.setItem("select_name", select_name.value);
//     localStorage.setItem("select_days",select_days.value);
//     localStorage.setItem("select_time",select_time.value);
//
// }

//
// document.getElementsByTagName("input")[0].value
// let form = document.querySelector('form')
// document.forms.form.onsubmit = function() {
//    let message = this.message.value;
//     console.log(message)
//     return false;
// };

//
// function added_event() {
//     let event_value = event_text.value;
//
//     document.getElementById('added_name_event').innerHTML = event_value
//     let event_text = document.querySelector('#event_text')
//
//     window.localStorage.setItem('bob', JSON.stringify([
//         { action: 'work', day: 'monday', time: '16-00'},
//         { action: 'chill', day: 'friday', time: '14-00'},
//     ]));
//
//     setTimeout(() => {
//         console.log(JSON.parse());
//     }, 2000)
//
//
// }
//
// document.getElementById('button_create').addEventListener('click', added_event);

