import React,{useEffect} from 'react'
import { ethers } from "ethers";
import abiData from "./abi.json"

export default function Balances() {

  const INTU_ADDRESS = "0x6c92E8018cF1284986B95A26d5666CA2bB8Aa9D7";

  useEffect(() => {
    const contract = async() => {
      const provider = new ethers.providers.Web3Provider(window.ethereum) 
      const signer = provider.getSigner();

      const INTUContract = await new ethers.Contract(INTU_ADDRESS, abiData, signer)


      // Vault Creation
      
      let arrayOfAddresses = [
        "0x5A2aC68d4517a773747Ed03cB7A04fd0884B7B87",
        "0x564C37233eDC7F3C11418Fda93aeCcC9ABB3f625"
      ]

      let rotateThreshold = "100"
      let txThreshold = "100"
      let adminThreshold = "100"

      let participantsPublicKeysForVault = [
        "0x5A2aC68d4517a773747Ed03cB7A04fd0884B7B87",
        "0x564C37233eDC7F3C11418Fda93aeCcC9ABB3f625"
      ]

      let vaultMessage = "First Vault"

      INTUContract.create([arrayOfAddresses], "MyFirstVault", [rotateThreshold,txThreshold,adminThreshold], [participantsPublicKeysForVault], [], vaultMessage)


      console.log(INTUContract.getUserVaults())
    }
    contract()
  },[])

  return (
    <div>balances</div>
  )
}
