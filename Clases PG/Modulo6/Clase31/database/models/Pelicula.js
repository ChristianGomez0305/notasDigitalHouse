module.exports = (sequelize, dataTypes) => {
    let alias = "Peliculas";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: dataTypes.STRING
        },
        length: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: "movies",
        timestamps: false
    }

    const Pelicula = sequelize.define(alias, cols, config);

    Pelicula.associate = function(models) {
        Pelicula.belongsTo(models.Generos, {
            as: "generos",
            foreignKey: "genre_id"
        })
    }

    return Pelicula;
}