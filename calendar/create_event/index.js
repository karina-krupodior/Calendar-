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


function added_event() {
    let event_value = event_text.value;

    document.getElementById('added_name_event').innerHTML = event_value
    let event_text = document.querySelector('#event_text')

    window.localStorage.setItem('bob', JSON.stringify([
        { action: 'work', day: 'monday', time: '16-00'},
        { action: 'chill', day: 'friday', time: '14-00'},
    ]));

    setTimeout(() => {
        console.log(JSON.parse());
    }, 2000)


}

document.getElementById('button_create').addEventListener('click', added_event);

