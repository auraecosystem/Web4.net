curl https://dropmail.me/api/graphql/af_AQFqQmJusEKqeszSQa6PbTdKW8DB8HoSZkndCY_o -H 'Content-Type: application/json' \
 -d '{"query":"mutation {introduceSession {id, expiresAt, addresses {fil1davykag3@mail2me.co}}}"}'

# DropMail API Example
curl -X GET "https://dropmail.me/api" \
  -H "Content-Type: application/json"
