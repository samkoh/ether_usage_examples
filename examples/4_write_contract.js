const { ethers } = require("ethers");

const INFURA_ID = '8d5b8012e27f4da3bc2d9c9973e6ffa5'
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`)

const account1 = '0xA74a1727C592D763C39a6524cBc56BE4A3Ae3Cd9' // Your account address 1 (Kovan Network 1)
const account2 = '0xb8A32014324a80fBb1ba506B97dd703D6005F71b' // Your account address 2 (Kovan Network 2)

//connect to wallet
const privateKey1 = '28e070d527afe9d293079b864aaaebcffec52b060a458a269fbe7e87eab13126' // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider)

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
];

//connect to contract
const address = '0xa36085f69e2889c224210f603d836748e7dc0088'
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const balance = await contract.balanceOf(account1)

    console.log(`\nReading from ${address}\n`)
    console.log(`Balance of sender: ${balance}\n`)

    const contractWithWallet = contract.connect(wallet)

    const tx = await contractWithWallet.transfer(account2, balance)
    await tx.wait()

    console.log(tx)

    const balanceOfSender = await contract.balanceOf(account1)
    const balanceOfReciever = await contract.balanceOf(account2)

    console.log(`\nBalance of sender: ${balanceOfSender}`)
    console.log(`Balance of receiver: ${balanceOfReciever}\n`)
}

main()