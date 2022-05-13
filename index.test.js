const {sequelize} = require('./db');
const {User, Board, Cheese} = require('./index')

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
        const testUser = await User.create({name: 'Nico'})

        expect(testUser.name).toBe('Nico');
    })

  test('can create a Board', async () => {
    // TODO - test creating a musician
    const testBoard = await Board.create({name: 'board1'})
        expect(testBoard.name).toBe('board1');
  })

  test('can create a Cheese', async () => {
    // TODO - test creating a musician
    const testCheese = await Cheese.create({name: 'Mozzarella'})
        expect(testCheese.name).toBe('Mozzarella');
  })
  
})