const { ethers } = require("ethers");

const INFURA_ID = '8d5b8012e27f4da3bc2d9c9973e6ffa5'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const main = async () => {
    const block = await provider.getBlockNumber()

    console.log(`\nBlock Number: ${block}\n`)

    const blockInfo = await provider.getBlock(block)

    console.log(blockInfo)

    const { transactions } = await provider.getBlockWithTransactions(block)

    console.log(`\nLogging first transaction in block:\n`)

    //this is to show the transaction in an array no.1, you can use for loop to show all the transactions
    //console.log(transactions[0])

    //create a for LOOP to show all the transactions
    for (let i = 0; i < transactions.length; i++) {
        console.log(transactions[i])
    }
}

main()