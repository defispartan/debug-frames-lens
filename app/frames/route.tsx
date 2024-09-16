/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";

const handleRequest = frames(async (ctx) => {
  const txnId =
    (ctx.message as any)?.untrustedData?.transactionId ||
    (ctx.message as any)?.untrustedData?.actionResponse;
  if (txnId) {
    return {
      image: (
        <div tw="flex flex-col">
          <div tw="flex">Tx Hash: {txnId}</div>
        </div>
      ),
      buttons: [
        <Button action="tx" target="/tx/approve" post_url="/">
          Submit Again
        </Button>,
      ],
    };
  }
  return {
    image: (
      <div tw="flex flex-col">
        <div tw="flex">Submit Zero-Value Transaction on Amoy Testnet</div>
      </div>
    ),
    buttons: [
      <Button action="tx" target="/tx/approve" post_url="/">
        Submit Tx
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
