export const batchABI = [
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address"
            }
        ],
        name: "AddressEmptyCode",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "AddressInsufficientBalance",
        type: "error"
    },
    {
        inputs: [],
        name: "FailedInnerCall",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address"
            }
        ],
        name: "SafeERC20FailedOperation",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "addresses",
                type: "address[]"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "transfer",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "addresses",
                type: "address[]"
            },
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]"
            }
        ],
        name: "transfer",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "token",
                type: "address"
            },
            {
                internalType: "address[]",
                name: "addresses",
                type: "address[]"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "transferToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "token",
                type: "address"
            },
            {
                internalType: "address[]",
                name: "addresses",
                type: "address[]"
            },
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]"
            }
        ],
        name: "transferToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }
]
