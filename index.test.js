const {sequelize} = require('./db');
const { User, Board, Cheese } = require('./index')
const { DataTypes } = require('sequelize');


describe('User, Boards, Cheeses Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a User', async () => {
        // TODO - test creating a band
        const testUser = await User.create({name: 'Nico', email:"nicolasd12@gmail.com"})
console.log(testUser)
        expect(testUser.name).toBe('Nico', "nicolasd12@gmail.com");
    })

  test('can create a Board', async () => {
    // TODO - test creating a musician
    const testBoard = await Board.create({name: 'board1', description: "Best cheese board ever", rating: 5})
    console.log(testBoard)    
    expect(testBoard.name).toBe('board1', "Best cheese board ever", 5);
  })

  test('can create a Cheese', async () => {
    // TODO - test creating a musician
    const testCheese = await Cheese.create({name: 'Mozzarella', description: 'mejor mozzarella'})
    console.log(testCheese)   
    expect(testCheese.name).toBe('Mozzarella', 'mejor mozzarella');
  })

  test('Users can have many Boards', async () => {
    const lindsay = await User.create({ name: "lindsay", email: "lindsay1991" })
    const board2 = await Board.create({name: 'board2', description: "second best cheese board ever", rating: 4})
    await lindsay.addBoard(board2)

    let b = await User.findAll({ include: Board })
    console.log("****Users", b)

    const boards = await lindsay.getBoards()
    console.log('lindsay fav boards', boards)
    expect(boards.length).toBe(1)
  })
  test('testing eager loading', async () => {
    const users = await User.findAll({
      include: { model: Board, as: 'Board' }
    });
    console.log(JSON.stringify(users, null, 2));
  })

})