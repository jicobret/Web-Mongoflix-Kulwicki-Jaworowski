db = db.getSiblingDB('mongoflix');

const actionMovies = db.movies.find(
    { genre: "Action" },
    { title: 1, genre: 1, releaseYear: 1 }
).pretty()

print("---------- filmy z gatunku akcji ----------")
actionMovies.forEach(doc => printjson(doc))


const avgRating = db.movies.find(
    {
        $and: [
            { releaseYear: { $gt: 2021 } },
            { "rating.average": { $gt: 8 } }
        ]
    },
    { title: 1, releaseYear: 1, "rating.average": 1 }
).pretty()
print("---------- filmy z 2021 z ocena powyzej 8 ----------")
avgRating.forEach(doc => printjson(doc))

const viewsByGenre = db.movies.aggregate([
    { $unwind: "$genre" },
    {
        $group: {
            _id: "$genre",
            averageRating: { $avg: "$rating.average" },
            count: { $sum: 1 }
        }
    },
    { $sort: { averageRating: -1 } }
])
print("---------- srednia ocena dla kazdego gatunku ----------")
viewsByGenre.forEach(doc => printjson(doc))


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