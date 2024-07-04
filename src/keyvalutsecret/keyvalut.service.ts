import { Injectable } from '@nestjs/common';
import { DefaultAzureCredential } from "@azure/identity"
import { SecretClient } from"@azure/keyvault-secrets"


@Injectable()
export class KeyValutService {

    async secret(client,secretName){
  

    }

  async getsecret(): Promise<any> {

    const credential = new DefaultAzureCredential();

    const vaultName = "backendazuretest";
    const url = `https://${vaultName}.vault.azure.net`; 

    const client = new SecretClient(url, credential);

    
    
    const secretName = "secret";

    try {

      const latestSecret = await client.getSecret(secretName);
      console.log(`Latest version of the secret ${secretName}: `, latestSecret);
      const specificSecret = await client.getSecret(secretName, { version: latestSecret.properties.version! });
      console.log(`The secret ${secretName} at the version ${latestSecret.properties.version!}: `, specificSecret);

      return specificSecret

      
    } catch (error) {

      return  error
      
    }

    

  }
}
