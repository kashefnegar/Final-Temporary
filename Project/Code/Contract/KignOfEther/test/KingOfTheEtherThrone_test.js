
/**
 * This file was created by truffle-test-generator.
 * For every test, a new contract will be created in the
 * top beforeEach block. This line uses the arguments for
 * your contract's constructor with the same variable names.
 * Each public, non-constant (view) method has a describe
 * block generated for it.
 */
var assert = require('assert');
const KingOfTheEtherThrone = artifacts.require('KingOfTheEtherThrone.sol');

contract('KingOfTheEtherThrone', async (accounts) => {
  const maintainer = accounts[0];
  const user1 = accounts[1];
  const user2 = accounts[2];
  const stranger = accounts[3];

  let kingoftheetherthrone;

  beforeEach(async () => {
    kingoftheetherthrone = await KingOfTheEtherThrone.new({from: maintainer});
  });

  describe('currentClaimPrice', () => {

  });

  describe('pastMonarchs', () => {

  });

  describe('currentMonarchx', () => {
    // it(" names should be the same", async() => {
    //   let monarchName = "Erfan";
    //   let options = { 
    //     from: user2,
    //     to: kingoftheetherthrone.address,
    //     value: web3.utils.toWei(web3.utils.toBN(5).toString(), 'ether') ,
    //     data: web3.utils.toHex(monarchName)
    //   };
    //   await web3.eth.sendTransaction(options).then( async() => {
        
    //   });
    //   // await kingoftheetherthrone.sendTransaction(options).then( async()  => {
    //   //   await kingoftheetherthrone.sendTransaction(options).then( async() => {
    //   //     let monarch = await kingoftheetherthrone.currentMonarch.call();
    //   //     assert.equal(monarch.name,monarchName,"WRONG NAMES");
    //   //   });
    //   // });
    // });
  });

  describe('numberOfMonarchs', () => {
    it("should return number 0", async() => {
      let numberOfMonarchs = await kingoftheetherthrone.numberOfMonarchs();
      // await console.log(numberOfMonarchs);
      assert.equal(numberOfMonarchs.toNumber(), 0, "WRONG VALUE");
      await kingoftheetherthrone.printing()
    });

    it("should return number 2", async() => {
      let options = { 
        from: accounts[2],
        to: kingoftheetherthrone.address,
        value: web3.utils.toWei(web3.utils.toBN(3).toString(), 'ether') 
      };
      let options1 = { 
        from: user1,
        to: kingoftheetherthrone.address,
        value: web3.utils.toWei(web3.utils.toBN(4).toString(), 'ether') 
      };
      await kingoftheetherthrone.sendTransaction(options).then( async()  => {
        await kingoftheetherthrone.sendTransaction(options1).then( async() => {
          let numberOfMonarchs = await kingoftheetherthrone.numberOfMonarchs();
          await assert.equal(numberOfMonarchs.toNumber(), 2, "WRONG VALUE");
      //     let balance = await web3.eth.getBalance(user1)
              

        });
      });
    });
  });

  describe('sweepCommission', () => {

  });

  describe('transferOwnership', () => {

  });
});
