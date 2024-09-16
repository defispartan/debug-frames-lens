import { frames } from "../../frames";
import { transaction } from "frames.js/core";
import { Abi } from "viem";
import { EthSendTransactionParams } from "frames.js";

export const POST = frames(async (ctx) => {
  return transaction({
    chainId: `eip155:80002`,
    method: "eth_sendTransaction",
    params: {
      abi: [] as Abi,
      to: "0x0000000000000000000000000000000000000000",
      value: "0x0",
      data: "0x",
    } as EthSendTransactionParams,
  });
});
