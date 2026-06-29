# See https://gql.readthedocs.io/en/latest/transports/websockets.html
from gql import Client, gql
from gql.transport.websockets import WebsocketsTransport

token = ""
transport = WebsocketsTransport(url="wss://dropmail.me/api/graphql/" + token + "/websocket")
client = Client(transport=transport, fetch_schema_from_transport=True)
query = gql("query {domains {id, name, introducedAt, expiresAt, availableVia}}")
result = client.execute(query)
print(result)
