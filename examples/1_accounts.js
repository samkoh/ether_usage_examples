
//const is the declaration of the variable
//'require ethers' - use ethers.js library 
const { ethers } = require("ethers");

const INFURA_ID = '8d5b8012e27f4da3bc2d9c9973e6ffa5'

//set up connection and it is a protocol that interact to the node
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e'

//await & async:  let the next process to proceed while waiting
const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}

main()

