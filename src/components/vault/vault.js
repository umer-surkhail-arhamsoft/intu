import React, {useEffect} from 'react'
import {getEncryptionKey,createVault} from "../../utils/functions"

function Vault() {

   

const createVault = async() => {
    
      let arrayOfAddresses = ["0x5A2aC68d4517a773747Ed03cB7A04fd0884B7B87"]
      let rotateThreshold = "100"
      let txThreshold = "100"
      let adminThreshold = "100"
      let participantsPublicKeysForVault = [
        "9aba73336ca3625be8afebe867ad2521d4f5269024e5f7a7e57a1e1cfa24ff7c"
      ]
      let participantsEncryptedSecretShares = await getEncryptionKey()
      let vaultMessage = "Sample Vault"
      createVault([arrayOfAddresses], "Vault1", [rotateThreshold,txThreshold,adminThreshold], [participantsPublicKeysForVault], [participantsEncryptedSecretShares], vaultMessage)

}


  return (
    <div>
        <button onClick={()=> createVault()}>Create Vault</button>     
    </div>
  )
}

export default Vault