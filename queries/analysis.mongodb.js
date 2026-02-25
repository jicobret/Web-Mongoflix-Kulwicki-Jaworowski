db = db.getSiblingDB('mongoflix');

const actionMovies = db.movies.aggregate([
    {
        $match: {
            genre: "Action",
            releaseYear: { $gt: 2020 }
        }
    }
])
print("---------- filmy z gatunku akcji po 2020 ----------")
actionMovies.forEach(doc => printjson(doc))


const avgRating = db.movies.aggregate([
    {
        $group: {
            _id: null,
            averageRating: { $avg: "$rating.average" }
        }
    }
])
print("---------- srednia ocena wszystkich filmow ----------")
avgRating.forEach(doc => printjson(doc))

const viewsByDirector = db.movies.aggregate([
    {
        $group: {
            _id: "$director.name",
            totalViews: { $sum: "$views" }
        }
    },
    {
        $sort: { totalViews: -1 }
    }
])
print("---------- laczne wyswietlenia poszczegolnych rezyserow ----------")
viewsByDirector.forEach(doc => printjson(doc))


//dodawanie recenzji:

db.movies.updateOne(
    {
        title: "Inception",
        "reviews.userId": { $ne: "user_021" }
    },
    {
        $push: {
            reviews: {
                userId: "user_021",
                username: "new_user",
                rating: 9,
                comment: "Amazing experience!",
                createdAt: new Date()
            }
        }
    }
)