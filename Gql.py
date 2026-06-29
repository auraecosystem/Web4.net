# See https://gql.readthedocs.io/en/latest/index.html
from gql import Client, gql
from gql.transport.aiohttp import AIOHTTPTransport

token = ""
transport = AIOHTTPTransport(url="https://dropmail.me/api/graphql/" + token)
client = Client(transport=transport, fetch_schema_from_transport=True)
query = gql("query {domains {id, name, introducedAt, expiresAt, availableVia}}")
result = client.execute(query)
print(result)
