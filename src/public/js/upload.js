const form      = document.querySelector('.site-form'),
    videoInput  = document.querySelector('#videoInput'),
    uploadInput = document.querySelector('#uploadInput'),
    fileName    = document.querySelector('.file-name'),
    title       = document.querySelector('.title')

uploadInput.addEventListener('change', () => {
    let file = uploadInput.files[0].name
    file = file.length > 25 ? file.slice(0, 15) + '...' + file.slice(file.length - 5, file.length) : file
    fileName.textContent = file
})

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    let formData = new FormData()
    
    formData.append('title', videoInput.value)
    formData.append('file', uploadInput.files[0])
    formData.append('time', getTime())

    let response = await fetch('/upload', {
        method: 'POST',
        body: formData
    })
    response = await response.json()
    if (response) {
        title.textContent = response.message
        setTimeout(() => {
            title.textContent = 'Upload a video'
        }, 1000)
        videoInput.value = null
        fileName.textContent = 'click upload a video'
    }
})

function getTime () {
    let date = new Date()
    let weekDay = getWeekFromNumber(date.getDay())
    let month = getMonthFromNumber(date.getMonth())
    let day = date.getDate()
    let year = date.getFullYear()
    let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours() 
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes() 
    let abbreviation = date.getHours() < 12 ? 'AM' : 'PM' 
    let time = weekDay + ", " + month + " " + day + ", " + year + " " + hours + ":" + minutes + ' ' + abbreviation
    return time
}

function getWeekFromNumber (number) {
    let string
    switch (number) {
        case 0 : string = 'Sunday'; break;
        case 1 : string = 'Monday'; break;
        case 2 : string = 'Tuesday'; break;
        case 3 : string = 'Wednesday'; break;
        case 4 : string = 'Thursday'; break;
        case 5 : string = 'Friday'; break;
        case 6 : string = 'Saturday'; break;
    }
    return string
}
function getMonthFromNumber (number) {
    let string
    switch (number) {
        case 0 : string = 'January'; break;
        case 1 : string = 'February'; break;
        case 2 : string = 'March'; break;
        case 3 : string = 'April'; break;
        case 4 : string = 'May'; break;
        case 5 : string = 'June'; break;
        case 6 : string = 'July'; break;
        case 7 : string = 'August'; break;
        case 8 : string = 'September'; break;
        case 9 : string = 'October'; break;
        case 10 : string = 'November'; break;
        case 11 : string = 'December'; break;
    }
    return string
}