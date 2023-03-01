import React from "react";
import { UrlApi } from "../api/api"
import { NextRouter } from "next/router";

export default function Home() {
    return (
        <>
            <div>Shorten  Url</div>
        </>
    )
}

export async function getServerSideProps(context: NextRouter) {
    const { shorturl } = context.query
    const res = await UrlApi.get(`/${shorturl}`);
    const data = res.data?.data
    if (data) {
        return {
            redirect: {
                permanent: false,
                destination: data,
            },
        };
    }
    return {
        notFound: true,
    }
}