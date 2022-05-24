const { ethers } = require("ethers");

const INFURA_ID = '8d5b8012e27f4da3bc2d9c9973e6ffa5'
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`)

const account1 = '0xA74a1727C592D763C39a6524cBc56BE4A3Ae3Cd9' // Your account address 1
const account2 = '0xb8A32014324a80fBb1ba506B97dd703D6005F71b' // Your account address 2

const privateKey1 = '28e070d527afe9d293079b864aaaebcffec52b060a458a269fbe7e87eab13126' // Private key of account 1

//set up wallet. The wallet can be used to sign a transaction
const wallet = new ethers.Wallet(privateKey1, provider)

const main = async () => {
    const senderBalanceBefore = await provider.getBalance(account1)
    const recieverBalanceBefore = await provider.getBalance(account2)

    console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)

    //function to send ethers
    const tx = await wallet.sendTransaction({
        to: account2,
        //util is to convert from wei -> ether
        value: ethers.utils.parseEther("0.025")
    })

    //wait the transaction to complete
    await tx.wait()
    console.log(tx)

    const senderBalanceAfter = await provider.getBalance(account1)
    const recieverBalanceAfter = await provider.getBalance(account2)

    console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
    console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)
}

main()