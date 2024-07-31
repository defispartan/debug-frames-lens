/* eslint-disable react/jsx-key */
import {farcasterHubContext, openframes} from "frames.js/middleware";
import {imagesWorkerMiddleware} from "frames.js/middleware/images-worker";
import {createFrames} from "frames.js/next";
import {DEFAULT_DEBUGGER_HUB_URL} from "../debug";
import {getLensFrameMessage, isLensFrameActionPayload} from "frames.js/lens";

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
                id: "lens",
                version: "1.0.0",
            },
            handler: {
                isValidPayload: (body: JSON) => isLensFrameActionPayload(body),
                getFrameMessage: async (body: JSON) => {
                    if (!isLensFrameActionPayload(body)) {
                        return undefined;
                    }
                    return {...await getLensFrameMessage(body)};
                },
            },
        }),
    ],
});
