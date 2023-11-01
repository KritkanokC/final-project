module.exports = (sequelize, DataTypes) => {
    const Raft = sequelize.define('Raft', {
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        meal: DataTypes.INTEGER,
        price: DataTypes.INTEGER,
        toilet: DataTypes.INTEGER,
        kitchen: DataTypes.INTEGER,
        people: DataTypes.INTEGER,
        bedroom: DataTypes.INTEGER,
        height: DataTypes.INTEGER
    })

    return Raft
}