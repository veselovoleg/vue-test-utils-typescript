module.exports = {
    get: () => {
        return Promise.resolve({
            data: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "delectus aut autem",
                    "completed": false
                },
                {
                    "userId": 2,
                    "id": 2,
                    "title": "ani tuni puni",
                    "completed": true
                },
                {
                    "userId": 2,
                    "id": 3,
                    "title": "lores ipsum",
                    "completed": false
                }
            ]
        })
    }
}