Clicking approve will trigger a **Token Approval** for **1 DEGEN** using the **Quidli Smart Contract** at https://basescan.org/address/0x948092958c66f228e6c7afcc96935661eea4a3c5

This are the related requests made by frames.js

`POST http://localhost:3010/frames?postType=tx&postUrl=http://localhost:3000/frames/tx/approve?__bi=2-tx&specification=openframes`

```
{
    "mockData": {
        "enabled": true,
        "requesterFollowsCaster": false,
        "casterFollowsRequester": false,
        "likedCast": false,
        "recastedCast": false
    },
    "clientProtocol": "lens@1.0.0",
    "untrustedData": {
        "specVersion": "1.0.0",
        "url": "http://localhost:3000/",
        "buttonIndex": 2,
        "profileId": "0x0706c2",
        "pubId": "0x01-0x01",
        "inputText": "",
        "state": "",
        "actionResponse": "",
        "deadline": 1722432196,
        "identityToken": "eyJhbGc...EhKadM",
        "unixTimestamp": 1722430398606
    },
    "trustedData": {
        "messageBytes": "0xe...1a71c"
    }
}
```

**RESPONSE**

```
{
    "chainId": "eip155:8453",
    "method": "eth_sendTransaction",
    "params": {
        "abi": [
            ...
            ...
            ...
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            ...
            ...
            ...
        ],
        "to": "0x4ed4e862860bed51a9570b96d89af5e1b0efefed",
        "data": "0x095...0000"
    }
}
```

POST `https://api-v2.lens.dev`

**PAYLOAD**

```
{
    "query": "mutation SignFrameAction($request: FrameLensManagerEIP712Request!) {\n  result: signFrameAction(request: $request) {\n    ...FrameLensManagerSignatureResult\n  }\n}\n\nfragment CreateFrameEIP712TypedData on CreateFrameEIP712TypedData {\n  types {\n    FrameData {\n      name\n      type\n    }\n  }\n  domain {\n    ...EIP712TypedDataDomain\n  }\n  value {\n    specVersion\n    url\n    buttonIndex\n    profileId\n    pubId\n    inputText\n    state\n    actionResponse\n    deadline\n  }\n}\n\nfragment FrameLensManagerSignatureResult on FrameLensManagerSignatureResult {\n  signedTypedData {\n    ...CreateFrameEIP712TypedData\n  }\n  signature\n}\n\nfragment EIP712TypedDataDomain on EIP712TypedDataDomain {\n  name\n  chainId\n  version\n  verifyingContract\n}",
    "variables": {
        "request": {
            "url": "http://localhost:3000/",
            "inputText": "",
            "state": "",
            "buttonIndex": 2,
            "actionResponse": "0xa3de7cc...933ec7c97",
            "profileId": "0x0706c2",
            "pubId": "0x01-0x01",
            "specVersion": "1.0.0"
        }
    },
    "operationName": "SignFrameAction"
}
```

**RESPONSE**

```
{
    "data": {
        "result": {
            "signedTypedData": {
                "types": {
                    "FrameData": [
                        {
                            "name": "specVersion",
                            "type": "string"
                        },
                        {
                            "name": "url",
                            "type": "string"
                        },
                        {
                            "name": "buttonIndex",
                            "type": "uint256"
                        },
                        {
                            "name": "profileId",
                            "type": "string"
                        },
                        {
                            "name": "pubId",
                            "type": "string"
                        },
                        {
                            "name": "inputText",
                            "type": "string"
                        },
                        {
                            "name": "state",
                            "type": "string"
                        },
                        {
                            "name": "actionResponse",
                            "type": "string"
                        },
                        {
                            "name": "deadline",
                            "type": "uint256"
                        }
                    ]
                },
                "domain": {
                    "name": "Lens Frames",
                    "chainId": 137,
                    "version": "1.0.0",
                    "verifyingContract": "0x0000000000000000000000000000000000000000"
                },
                "value": {
                    "specVersion": "1.0.0",
                    "url": "http://localhost:3000/",
                    "buttonIndex": 2,
                    "profileId": "0x0706c2",
                    "pubId": "0x01-0x01",
                    "inputText": "",
                    "state": "",
                    "actionResponse": "0xa...c7c97",
                    "deadline": 1722432204
                }
            },
            "signature": "0xf0a5066e...98fde5991c"
        }
    }
}
```

**POST** `http://localhost:3000/frames/tx/approve?__bi=2-tx`

**PAYLOAD**

```
{
    "mockData": {
        "enabled": true,
        "requesterFollowsCaster": false,
        "casterFollowsRequester": false,
        "likedCast": false,
        "recastedCast": false
    },
    "clientProtocol": "lens@1.0.0",
    "untrustedData": {
        "specVersion": "1.0.0",
        "url": "http://localhost:3000/",
        "buttonIndex": 2,
        "profileId": "0x0706c2",
        "pubId": "0x01-0x01",
        "inputText": "",
        "state": "",
        "actionResponse": "0xa3...7c97",
        "deadline": 1722432204,
        "identityToken": "eyJhbGc...EhKadM",
        "unixTimestamp": 1722430405192
    },
    "trustedData": {
        "messageBytes": "0xf...fde5991c"
    }
}
```

**REPONSE**

```
RangeError [ERR_HTTP_INVALID_STATUS_CODE]: Invalid status code: 0
    at new NodeError (node:internal/errors:399:5)
    at ServerResponse.writeHead (node:_http_server:349:11)
    at ServerResponse.writeHead (/Users/luso/workspace/test/demo-lens/node_modules/.pnpm/next@14.1.4_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/compression/index.js:46:263)
    at ServerResponse._implicitHeader (node:_http_server:335:8)
    at ServerResponse.end (/Users/luso/workspace/test/demo-lens/node_modules/.pnpm/next@14.1.4_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/compression/index.js:22:749)
    at sendResponse (/Users/luso/workspace/test/demo-lens/node_modules/.pnpm/next@14.1.4_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/server/send-response.js:42:30)
    at doRender (/Users/luso/workspace/test/demo-lens/node_modules/.pnpm/next@14.1.4_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/server/base-server.js:1347:62)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async cacheEntry.responseCache.get.routeKind (/Users/luso/workspace/test/demo-lens/node_modules/.pnpm/next@14.1.4_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/server/base-server.js:1539:28)
    at async NextNodeServer.renderToResponseWithComponentsImpl (/Users/luso/workspace/test/demo-lens/node_modules/.pnpm/next@14.1.4_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/server/base-server.js:1447:28)```