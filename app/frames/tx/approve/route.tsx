import {frames} from "../../frames";
import {ERC20abi} from "../../../lib/definitions/abi/erc20-abi";
import {Abi, encodeFunctionData} from "viem";
import {transaction} from "frames.js/core";
import {ethers} from "ethers";
import {EthSendTransactionParams} from "frames.js";

export const POST = frames(async (ctx) => {
    return transaction({
        chainId: `eip155:8453`,
        method: "eth_sendTransaction",
        params: {
            abi: ERC20abi as Abi,
            to: "0x4ed4e862860bed51a9570b96d89af5e1b0efefed",
            data: encodeFunctionData({
                abi: ERC20abi,
                functionName: "approve",
                args: [
                    "0x948092958c66f228e6C7afcc96935661eea4a3c5",
                    ethers.parseUnits("1", 18)
                ]
            })
        } as EthSendTransactionParams,
    });
});