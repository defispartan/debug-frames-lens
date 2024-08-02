/* eslint-disable react/jsx-key */
import { openframes } from "frames.js/middleware";
import { imagesWorkerMiddleware } from "frames.js/middleware/images-worker";
import { createFrames } from "frames.js/next";
import { JsonValue } from "frames.js/types";

interface MessageWithWalletAddressImplementation {
  walletAddress: () => Promise<string | undefined>;
}

export const frames = createFrames({
  basePath: "/frames",
  initialState: {
    pageIndex: 0,
  },
  middleware: [
    imagesWorkerMiddleware({
      imagesRoute: "/images",
    }),
    openframes({
      clientProtocol: {
        id: "anonymous",
        version: "1.0.0",
      },
      handler: {
        isValidPayload: (body: JsonValue) => true,
        getFrameMessage: async (body: JsonValue) => {
          return body as unknown as MessageWithWalletAddressImplementation;
        },
      },
    }),
  ],
});
