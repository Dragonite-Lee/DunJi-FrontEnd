import axios from "axios";

const api = axios.create({
    baseURL: "http://3.39.129.136:8090/DungziProject",
});

export const roomApi = {

    postRoom: (data: any) => 
        api.post("/room/registerAction",  
        data, {
            headers: {
                "Content-Type": `multipart/form-data`,
            },
        }
    )
};

export const reviewApi = {

    postReview: (data: any) => 
        api.post("/room/reviewAction",
        data, {
            headers: {
                "Content-Type": `multipart/form-data`,
            },
        }
    )
}

export const mapApi = {
    getRoom: (data: any) =>
        api.get("/room/filterAction", {
            params: {
                startLongitude: data[0],
                startLatitude: data[1],
                endLongitude: data[2],
                endLatitude: data[3],
            },
        }),

    getRoomDetail: (ROOMID: string | string[] | undefined) =>

        api.get("/room/detail", { params: { RoomID : ROOMID } }),
}
export const logInApi = {
    postPermissionCode: (code: any) =>
        api.get(`/login/oauth_kakao?code=${code}`),
        // api.get("https://kauth.kakao.com/oauth/authorize?client_id=b99bba6a1951beda24353d74dfa952d3&redirect_uri=http://3.39.129.136:8090/DungziProject/login/oauth_kakao&response_type=code"),
        

    postToken: (token: any) =>
        api.post("/login/oauth_kakao", {
            headers: {
                Authorization: `Bearer ${token}`
            }
    })

};
