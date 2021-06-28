const fs = require('fs')
const path = require('path')

const getVideo = () => {
    let users = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'users.json'), 'utf-8')
    let videos = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'videos.json'), 'utf-8')
    users = users ? JSON.parse(users) : []
    videos = videos ? JSON.parse(videos) : []
    videos.map(video => {
        let userId = video.user_id
        let user = users.find(user => user.user_id == userId)
        video.user = user
    })
    return videos
}

module.exports = {getVideo}