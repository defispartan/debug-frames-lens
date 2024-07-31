/* eslint-disable react/jsx-key */
import {Button} from "frames.js/next";
import {frames} from "./frames";

const handleRequest = frames(async (ctx) => {
    return {
        image: (
            <div tw="flex flex-col">
                <div tw="flex">Click the button</div>
            </div>
        ),
        buttons: [
            <Button action="post" target="/who-am-i">
                Who am I?
            </Button>,
            <Button action="tx" target="/tx/approve" post_url="/">
                Approve
            </Button>,
        ],
    };
});

export const GET = handleRequest;
export const POST = handleRequest;
