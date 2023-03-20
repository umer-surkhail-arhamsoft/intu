import { ENV } from "../config/config" 
import {ethers} from "ethers"
import axios from "axios"


export const getEncryptionKey = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum) 
    const signer = provider.getSigner();
    let signature = await signer.signMessage(ENV.signatureMessage);


    const {data} = await axios.post('https://phk18up9uk.execute-api.us-west-1.amazonaws.com/beta/getencryptionkey', { signature:  JSON.stringify(signature) }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return data;

}

const createVault = () => {

}

