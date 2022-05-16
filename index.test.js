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
  
})