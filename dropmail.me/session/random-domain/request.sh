$ curl --silent -H "Content-Type: application/x-www-form-urlencoded" https://dropmail.me/api/graphql/MY_TOKEN -d 'query=mutation {introduceSession {id, expiresAt, addresses{id, address}}}' | jq
{
  "data": {
    "introduceSession": {
      "id": "U2Vzc2lvbjqcMxamadJC_aLiPz_XL0lK",
      "expiresAt": "2021-02-18T01:40:02+00:00",
      "addresses": [
        {
          "id": "QWRkcmVzczqcMxamadJC_aLiPz_XL0lKOmRyb2ZAMTBtYWlsLm9yZw",
          "address": "example@10mail.org"
        }
      ]
    }
  }
}
    
