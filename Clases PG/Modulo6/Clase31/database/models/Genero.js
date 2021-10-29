
module.exports = (sequelize, dataTypes) => {
    let alias = "Generos";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: "genres",
        timestamps: false
    }

    const Genero = sequelize.define(alias, cols, config);

    Genero.associate = function(models) {
        Genero.hasMany(models.Peliculas, {
            as: "peliculas",
            foreignKey: "genre_id"
        })
    } 

    /*
    Pelicula.belongsToMany(models.Actores, {
        as : "actores",
        through : "actor_movie",
        foreignKey: "movie_id",
        otherKey: "actor_id",
        timestamps: false
    })
    */

    return Genero;
}
