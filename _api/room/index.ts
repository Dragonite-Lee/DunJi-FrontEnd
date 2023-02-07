import { api } from "_api";

export const roomApi = {

    postRoom: (data: any) => 
        api.post("/room/registerAction",  
        data, {
            headers: {
                "Content-Type":`multipart/form-data`,
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
                startLongitude: data.startLongitude,
                startLatitude: data.startLatitude,
                endLongitude: data.endLongitude,
                endLatitude: data.endLatitude,
                dealType: data.dealType,
                oneRoom: data.oneRoom,
                twoRoom: data.twoRoom,
                threeRoom: data.threeRoomm,
                priceUnit: data.priceUnit,
                priceFrom: data.priceFrom,
                priceTo: data.priceTo,
                depositFrom: data.depositFrom,
                depositTo: data.depositTo,
                manageFrom: data.manageFrom,
                manageTo: data.manageTo,
                floorfive: data.floorfive,
                floorsixup: data.floorsixup,
                floortenup: data.floortenup,
                basement: data.basement,
                rooftop: data.rooftop,
                openType: data.openType,
                separateType: data.separateType,
                twoFloorType: data.twoFloorType,
                sizeFrom: data.sizeFrom,
                sizeTo: data.sizeTo,
                car: data.car,
                elevator: data.elevator,
                pet: data.pet,
                fullOption: data.fullOption,
                women: data.women,
                loan: data.loan,
                priceSort: data.priceSort,
                recommendSort: data.recommendSort,
            },
        }),

    getRoomDetail: (ROOMID: string | string[] | undefined) =>
        api.get("/room", { params: { roomId : ROOMID } }),

    getReviewDetail: (BUILDINGID: string | string[] | undefined) =>
        api.get("/review", {params: {buildingId : BUILDINGID} }),
}
